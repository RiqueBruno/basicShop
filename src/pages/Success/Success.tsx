import React, { useEffect } from 'react';
import { getSavedCart } from '../../utils/cartFunctions';
import { ItemCart } from '../../interfaces/ItemCart';

export default function Success() {
  const [cart, setCart] = React.useState<ItemCart[] | []>([]);
  const [total, setTotal] = React.useState(0);

  useEffect(() => {
    try {
      const cart = getSavedCart();
      const total = cart.reduce((acc, item) => acc + item.price, 0);
      setCart(cart);
      setTotal(total);
      localStorage.removeItem('cartProducts');
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <main className="relative h-full w-full flex items-end justify-center">
      <section className="absolute w-3/4 md:w-2/4 h-96 bg-green-600 text-white md:p-24 top-16 rounded-md flex flex-col items-center justify-center">
        <h1 className="md:text-3xl text-lg w-[80%] mb-4 font-bold text-center">
          Compra efetuada com sucesso!
        </h1>
        <p className="mb-4 font-bold text-sm md:text-base">
          Valor total de R$ {total.toFixed(2)}
        </p>
        <div className="flex w-full justify-center items-center h-20">
          {cart.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="relative h-10 w-10 bg-contain bg-center rounded-full mr-2"
            >
              <img
                className="h-10 w-10 bg-contain bg-center rounded-full mr-2"
                src={item.thumbnail}
                alt={item.title}
              />
              <div className="absolute bottom-0 right-0 text-lg text-blue-950 bg-white h-4 w-4 flex justify-center items-center rounded-full">
                {item.quantity}
              </div>
            </div>
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
