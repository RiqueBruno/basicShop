import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/Table';
import { useNavigate } from 'react-router-dom';
import {
  getSavedCart,
  removeCartProduct,
  saveCartProduct,
} from '../../utils/cartFunctions';
import { ItemCart } from '../../interfaces/ItemCart';
import Button from '../../components/Button/Button';

export default function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<ItemCart[]>(getSavedCart());
  const [total, setTotal] = useState<number>(0);

  const calculateTotal = () => {
    const total = cart.reduce((acc, c) => acc + c.price * c.quantity, 0);
    setTotal(total);
  };

  const onRemoveCart = (id: string) => {
    const product = cart.find((c) => c.id === id);
    if (product?.quantity === 1) {
      removeCartProduct(product);
      setCart((prevCart) => prevCart.filter((c) => c.id !== id));
      if (cart.length === 0) setTotal(0);
      return;
    } else if (product) {
      setCart((prevCart) =>
        prevCart.map((c) =>
          c.id === id ? { ...c, quantity: c.quantity - 1 } : c,
        ),
      );
      saveCartProduct(cart);
      setTotal((prevTotal) => prevTotal - product.price);
    }
  };

  const onAddCart = (id: string) => {
    const product = cart.find((c) => c.id === id);
    if (product) {
      setCart((prevCart) =>
        prevCart.map((c) =>
          c.id === id ? { ...c, quantity: c.quantity + 1 } : c,
        ),
      );
      saveCartProduct(cart);
      setTotal((prevTotal) => prevTotal + product.price);
    }
  };

  useEffect(() => {
    calculateTotal();
    saveCartProduct(cart);
  }, [cart]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center pt-10">
      <section className="w-4/5 h-full mb-4">
        <Table
          type="cart"
          cart={cart}
          onRemoveCart={onRemoveCart}
          onAddCart={onAddCart}
          onRemoveFavorite={() => {}}
          favorites={[]}
        />
      </section>
      <p>{`Total: R$ ${total.toFixed(2)}`}</p>
      {cart.length > 0 && (
        <Button
          text=""
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={() => navigate('/success')}
        >
          Finalizar compra
        </Button>
      )}
    </div>
  );
}
