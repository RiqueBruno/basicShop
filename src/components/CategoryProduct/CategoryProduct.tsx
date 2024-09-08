import React from 'react';
import CardProduct from '../CardProduct/CardProduct';
import { CategoryProductProps } from '../../interfaces/CategoryProductProps';

export default function CategoryProduct({
  products,
  category,
  isloading,
}: CategoryProductProps) {
  return (
    <div className="w-full h-full my-4 flex flex-col items-center justify-center">
      {isloading ? (
        <section className="w-full h-full">
          <header className="w-full">
            <h2 className="font-bold text-xl tracking-wider text-blue-950">
              <div className="w-20 h-4 bg-gray-300 rounded-md mb-2" />
            </h2>
          </header>
          <div className="flex overflow-hidden border-y-2 w-full h-80 items-center">
            {[...Array(20)].map((_, index) => (
              <article
                key={index}
                className="h-[80%] w-40 p-2 border-2 border-blue-300 bg-slate-100 text-xs mx-2 rounded-md"
              >
                <CardProduct
                  key={index}
                  id=""
                  title=""
                  price={0}
                  thumbnail=""
                  typeCard="skeleton"
                />
              </article>
            ))}
          </div>
        </section>
      ) : (
        <section className="h-full w-full">
          <header className="w-full">
            <h2 className="font-bold text-xl tracking-wider text-blue-950">
              {category}
            </h2>
          </header>
          <div className="flex overflow-scroll overflow-y-hidden border-y-2 w-full h-80 items-center scrollbar scrollbar-thumb-blue-500 scrollbar-track-blue-200 md:scroll-m-2">
            {products.map((product, index) => (
              <article
                key={index}
                className="h-[80%] w-40 p-2 border-2 border-blue-300 bg-slate-100 text-xs mx-2 rounded-md"
              >
                <CardProduct
                  key={index}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  thumbnail={product.thumbnail}
                  typeCard="normal"
                />
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
