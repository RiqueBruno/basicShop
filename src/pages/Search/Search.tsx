import React, { useEffect, useState } from 'react';
import {
  fetchProductsByCategoriesList,
  fetchProductsList,
} from '../../utils/fetchFunctions';
import CardProduct from '../../components/CardProduct/CardProduct';
import { Item } from '../../interfaces/Item';

type filterInterface = 'asc' | 'desc';

export default function Search() {
  const [filter, setFilter] = useState<filterInterface>('asc');
  const [products, setProducts] = useState<Item[]>([]);
  const url = window.location.search;

  const searchType = async () => {
    const searchParams = url.split('=');
    const searchKey = searchParams[0];
    const searchValues = searchParams[1].split(',');

    const promises = searchValues.map(async (id) => {
      if (searchKey == '?product') {
        const result = await fetchProductsList(id);
        return Promise.resolve(result);
      } else if (searchKey == '?category') {
        const result = await fetchProductsByCategoriesList(id);
        return Promise.resolve(result);
      } else {
        return Promise.resolve({ results: [] });
      }
    });
    const results = await Promise.all(promises);
    return [...results[0]];
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await searchType();
        setProducts(productsData);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, [url]);
  const sortProducts = (products: Item[], order: filterInterface) => {
    return products.sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price,
    );
  };
  const sortedProducts = sortProducts([...products], filter);

  return (
    <main className="w-full h-full flex flex-col items-start justify-center p-10">
      <section className="w-full h-32 flex items-center border-2 border-blue-500 rounded-md p-4 mb-10">
        <label
          htmlFor="filter"
          className="mr-4 flex w-full justify-between items-center text-blue-950 md:justify-center"
        >
          Ordenar por preço:
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value as filterInterface)}
            className="p-2 border border-blue-400 rounded text-blue-950 text-sm md:ml-4"
          >
            <option value="asc">Menor</option>
            <option value="desc">Maior</option>
          </select>
        </label>
      </section>
      <section className="w-full h-full flex p-10 flex-wrap items-center justify-center">
        <h1 className="w-full h-10 text-center">{`${sortedProducts.length} resultados da busca`}</h1>
        {sortedProducts.map((product, index) => (
          <article
            key={product.id}
            className="h-54 w-40 p-2 border-2 border-blue-300 bg-slate-100 text-xs mx-2 rounded-md mb-2 hover:bg-blue-300"
          >
            <CardProduct
              key={index}
              title={product.title}
              thumbnail={product.thumbnail}
              price={product.price}
              id={product.id}
              typeCard="normal"
            />
          </article>
        ))}
      </section>
    </main>
  );
}
