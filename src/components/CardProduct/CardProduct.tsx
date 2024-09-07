import React from 'react';
import { CardProductProps } from '../../interfaces/CardProductProps';
import Button from '../Button/Button';

export default function CardProduct({
  index,
  id,
  title,
  price,
  thumbnail,
}: CardProductProps) {
  return (
    <article key={index}>
      <Button text="" id={id} onClick={() => {}}>
        <div>
          <img
            src={thumbnail || 'https://via.placeholder.com/150'}
            alt="Imagem do produto"
          />
        </div>
        <header>
          <h3>{title}</h3>
        </header>
        <p>{price}</p>
      </Button>
    </article>
  );
}
