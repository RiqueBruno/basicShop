import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import cart from '../../assets/icons/cart.svg';
import Button from '../Button/Button';

export default function Cart() {
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;

  const { cartItems } = cartContext;
  const numberOfItems = cartItems.length;

  const onClick = () => {
    navigate('/cart');
  };

  return (
    <Button
      className="relative flex items-center justify-center h-6 w-6 md:h-8 md:w-8"
      text=""
      onClick={onClick}
    >
      <p className="absolute text-red-800 text-xs bottom-3 md:bottom-5 md:right-3">
        {numberOfItems}
      </p>
      <img src={cart} alt="Carrinho de compras" className="absolute top-1" />
    </Button>
  );
}
