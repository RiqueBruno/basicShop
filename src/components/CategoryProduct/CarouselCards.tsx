import React, { useRef } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import { CategoryProductProps } from '../../interfaces/CategoryProductProps';
import Button from '../Button/Button';

export default function CarouselCard({
  products,
  category,
  isloading,
}: CategoryProductProps) {
  const carousel = useRef<HTMLDivElement>(null);

  const handleScroll = (t: 'left' | 'right') => {
    if (carousel.current) {
      const { offsetWidth } = carousel.current;

      if (t === 'left') {
        //<
        carousel.current.scrollLeft -= offsetWidth;
      }
      if (t === 'right') {
        //>
        carousel.current.scrollLeft += offsetWidth;
      }
    }
  };
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
        <section className="h-full w-full relative">
          <header className="w-full">
            <h2 className="font-bold text-xl tracking-wider text-blue-950">
              {category}
            </h2>
          </header>
          <div
            ref={carousel}
            className="flex scroll-smooth overflow-scroll overflow-y-hidden border-y-2 w-full h-80 items-center scrollbar scrollbar-thumb-blue-500 scrollbar-thin scrollbar-track-transparent md:overflow-hidden"
          >
            {products.map((product, index) => (
              <article
                key={`${product.id}-${index}-${Math.random()}`}
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
            <div className="absolute top-0 right-0 w-full h-full flex items-center justify-between">
              <Button
                text="<"
                onClick={() => carousel.current && handleScroll('left')}
                className="bg-white rounded-full h-10 w-10 text-center border-2 border-blue-500 text-blue-950 disabled:opacity-50"
              />
              <Button
                text=">"
                onClick={() => carousel.current && handleScroll('right')}
                className="bg-white rounded-full h-10 w-10 text-center border-2 border-blue-500 text-blue-950 disabled:opacity-50"
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
