import React from 'react';
import cart from '../../assets/icons/cart.svg';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { getSavedCartIDs } from '../../utils/cartFunctions';

export default function Cart() {
  const navigate = useNavigate();
  const numberOfItems: number = getSavedCartIDs().length;

  const onClick = () => {
    navigate('/cart');
  };

  return (
    <Button className="relative flex items-center justify-center h-8 w-8" text="" onClick={onClick}>
      <p className="absolute text-red-800 text-sm bottom-5 right-3">{numberOfItems}</p>
      <img src={cart} alt="Carrinho de compras" className="absolute top-1" />
    </Button>
  );
}
