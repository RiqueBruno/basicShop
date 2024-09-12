import React from 'react';
import { getSavedCart } from '../../utils/cartFunctions';

export default function Success() {
  const cart = getSavedCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <main className="relative h-full w-full flex items-end justify-center">
      <section className="absolute w-3/4 h-96 bg-green-600 text-white p-32 top-16 rounded-md flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-4 font-bold">
          Compra efetuada com sucesso!
        </h1>
        <p className="mb-4 font-bold">Valor total de R$ {total.toFixed(2)}</p>
        <div className="flex w-full justify-center items-center h-20">
          {cart.slice(0, 2).map((item, index) => (
            <img
              key={index}
              className="h-10 w-10 bg-contain bg-center rounded-full mr-2"
              src={item.thumbnail}
              alt={item.title}
            />
          ))}
          {cart.length > 2 && (
            <div className="h-10 w-10 bg-contain bg-center rounded-full bg-white text-blue-950 flex items-center justify-center">
              +{cart.length - 2}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
