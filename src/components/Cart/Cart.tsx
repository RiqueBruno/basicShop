import React from 'react'
import cart from '../../assets/icons/cart.svg';
import Button from '../Button/Button';

export default function Cart() {
  return (
    <Button text='' onClick={() => {}}>
        <p></p>
        <img src={ cart } alt="Carrinho de compras" />
    </Button>
  )
}
