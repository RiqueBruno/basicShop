import React from 'react';
import cart from '../../assets/icons/cart.svg';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { getSavedCart } from '../../utils/cartFunctions';

export default function Cart() {
  const navigate = useNavigate();
  const numberOfItems = getSavedCart().length;

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
