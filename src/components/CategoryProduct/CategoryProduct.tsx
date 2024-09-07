import React from 'react';
import CardProduct from '../CardProduct/CardProduct';
import { CategoryProductProps } from '../../interfaces/CategoryProductProps';

export default function CategoryProduct({
  products,
  category,
}: CategoryProductProps) {
  return (
    <section className="w-[90%] h-60 my-4">
      <header>
        <h2>{category}</h2>
      </header>
      <div className="flex overflow-scroll overflow-y-hidden">
        {products.map((product, index) => (
          <CardProduct
            key={index}
            id={product.id}
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
    </section>
  );
}
