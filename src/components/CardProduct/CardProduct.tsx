import React from 'react';

export default function CardProduct(
  index: number,
  title: string,
  price: number,
  thumbnail: string | `https://via.placeholder.com/150`
) {
  return (
    <article key={index}>
      <div>
        <img src={thumbnail} alt="Imagem do produto" />
      </div>
      <header>
        <h3>{title}</h3>
      </header>
      <p>{price}</p>
    </article>
  );
}
