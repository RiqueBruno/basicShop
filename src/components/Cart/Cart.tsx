import React from 'react'
import cart from '../../assets/icons/cart.svg';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const navigate = useNavigate();
    

    const onClick = () => {
        navigate('/cart');
    };

  return (
    <Button text='' onClick={onClick}>
        <p></p>
        <img src={ cart } alt="Carrinho de compras" />
    </Button>
  )
}
