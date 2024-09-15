import React, { useEffect, useState } from 'react';
import { fetchProductsByCategoriesList } from '../../utils/fetchFunctions';
import { Item } from '../../interfaces/Item';
import Carousel from '../../components/Carousel/Carousel';
import { Categories } from '../../utils/categories';
import CarouselCard from '../../components/CategoryProduct/CarouselCards';

interface ContrastProduct {
  id: string;
  category: string;
  product: Item;
}

export default function Home() {
  const [category, setCategory] = useState<{ [key: string]: Item[] }>({
    cat1: [],
    cat2: [],
    cat3: [],
  });
  const [highlightedItems, setHighlightedItems] = useState<ContrastProduct[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const categories = [
    { key: 'cat1', id: 'MLB1648' },
    { key: 'cat2', id: 'MLB1051' },
    { key: 'cat3', id: 'MLB1574' },
  ];

  const contrasts = [
    Categories[Math.floor(Math.random() * Categories.length)],
    Categories[Math.floor(Math.random() * Categories.length)],
    Categories[Math.floor(Math.random() * Categories.length)],
    Categories[Math.floor(Math.random() * Categories.length)],
  ];

  useEffect(() => {
    const fetchCategories = categories.map((cat) =>
      fetchProductsByCategoriesList(cat.id),
    );
    const fetchContrasts = contrasts.map((con) =>
      fetchProductsByCategoriesList(con.id),
    );

    Promise.all([...fetchCategories, ...fetchContrasts]).then((values) => {
      setCategory({
        cat1: values[0].slice(0, 20),
        cat2: values[1].slice(0, 20),
        cat3: values[2].slice(0, 20),
      });

      setHighlightedItems([
        {
          id: contrasts[0].id,
          category: contrasts[0].name,
          product: values[3][0],
        },
        {
          id: contrasts[1].id,
          category: contrasts[1].name,
          product: values[4][0],
        },
        {
          id: contrasts[2].id,
          category: contrasts[2].name,
          product: values[5][0],
        },
        {
          id: contrasts[3].id,
          category: contrasts[3].name,
          product: values[6][0],
        },
      ]);
      setIsLoading(false);
    });
  }, []);

  return (
    <main className="w-full flex flex-col items-center">
      <h1 className="hidden">Home</h1>
      <section className="w-full h-64 flex items-center justify-center bg-gradient-to-b from-cyan-500 to-blue-500 py-20 my-10 shadow-blue-500 shadow-md md:h-96 overflow-hidden">
        <Carousel items={highlightedItems} />
      </section>
      <div className="w-[90%] overflow-auto flex flex-col items-center justify-center">
        <CarouselCard
          products={category.cat1}
          isloading={isLoading}
          category="Informática"
        />
        <CarouselCard
          products={category.cat2}
          isloading={isLoading}
          category="Celulares"
        />
        <CarouselCard
          products={category.cat3}
          isloading={isLoading}
          category="Casa"
        />
      </div>
    </main>
  );
}
