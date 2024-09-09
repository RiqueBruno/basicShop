import React, { useEffect, useState } from 'react';
import { fetchProduct } from '../../utils/fetchFunctions';
import { Item } from '../../interfaces/Item';
import Button from '../../components/Button/Button';
import addCart from '../../assets/icons/addCart.svg';

export default function Product() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<Item>();
  const [pictures, setPictures] = useState<string[]>([]);
  const urlPath = window.location.pathname;
  const searchParams = urlPath.split('/');

  useEffect(() => {
    const fetchP = async () => {
      try {
        const data = await fetchProduct(searchParams[2]);
        const pictures = data.pictures.map((item: Item) => item.pictures.url);
        setIsLoading(false);
        setProduct(await Promise.resolve(data));
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    };
    fetchP();
  }, []);

  return (
    <section className="w-full h-full">
      {isLoading ? (
        <h1>Carregando</h1>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 mt-10">
          <article className="w-[98%] h-96 flex border-2 border-blue-400 rounded-md md:w-[80%]">
            <div className="w-[46%] flex items-center justify-center border-r-2 border-gray-100 md:w-[50%]">
              <img
                src={product?.thumbnail.replace('-I.', '-O.')}
                alt={product?.title}
                className="md:w-60 bg-cover bg-center"
              />
            </div>
            <div className="w-[54%] flex flex-col items-start justify-center pl-4 md:w-[50%]">
              <h1 className="text-blue-950 text-base mb-2 max-h-40 overflow-hidden w-40 md:w-[90%]">
                {product?.title}
              </h1>
              <div className="mb-4">⭐⭐⭐⭐⭐</div>
              <h2 className="text-blue-950 text-2xl pb-4">{`R$ ${product?.price.toFixed(2)}`}</h2>
              <div className="w-full flex md:items-center">
                <Button
                  text=""
                  onClick={() => {}}
                  className="w-2/4 md:w-2/4 text-white bg-gradient-to-b to-blue-800 from-blue-400 rounded-md py-1 mt-2 flex items-center justify-center"
                >
                  <p className="hidden md:block md:mx-4">
                    Adicionar ao carrinho
                  </p>
                  <img
                    src={addCart}
                    alt="botão Adicionar ao Carrinho"
                    className="h-10 w-10 md:hidden"
                  />
                </Button>
                <p className="h-10 w-10 text-center">❤️</p>
              </div>
              <div className="w-full text-gray-600 text-sm">
                <p>{`Quantidade: ${product?.initial_quantity}`}</p>
                <p>{product?.warranty}</p>
              </div>
            </div>
          </article>
          <article className="w-[98%] h-auto min-h-80 flex border-2 border-blue-400 rounded-md mt-10 justify-center p-4 md:w-[80%]">
            <div className="w-3/4 flex flex-col items-center">
              <h1 className="text-blue-950 text-lg">Descrição</h1>
              <hr className="w-full border-2 border-blue-400" />
              <p className="text-blue-950 text-center my-4">{product?.title}</p>
              <p className="text-blue-950 text-center mb-6">
                {product?.descriptions[0]?.toString()}
              </p>
              <h1 className="text-blue-950 text-lg">Especificações</h1>
              <hr className="w-full border-2 border-blue-400 mb-4" />
              <div className="w-full flex flex-col items-center">
                {product?.attributes.map((item) => (
                  <p key={item.name} className="text-blue-950 text-center my-2">
                    {`${item.name}: ${item.value_name}`}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
