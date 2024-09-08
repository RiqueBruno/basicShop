import React from 'react';
import { CardProductProps } from '../../interfaces/CardProductProps';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export default function CardProduct({
  id,
  title,
  price,
  thumbnail,
  typeCard,
}: CardProductProps) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      {typeCard == 'skeleton' ? (
        <div className="h-36 p-2 w-full animate-pulse flex flex-col justify-around items-center">
          <div className="w-28 h-28 bg-gray-300 rounded-lg mb-2" />
          <header className="w-full mb-2 text-blue-950">
            <div className="w-full h-4 bg-gray-300 rounded-md mb-2" />
          </header>
          <div className="w-20 h-4 bg-gray-300 rounded-md" />
        </div>
      ) : (
        <div className="h-full w-full">
          <Button
            text=""
            id={id}
            onClick={() => navigate(`/product/${id}`)}
            className="w-36 h-full flex flex-col items-center justify-around md:cursor-pointer"
          >
            <div className="w-28 h-28 object-cover rounded-lg mb-2">
              <img
                src={thumbnail || 'https://via.placeholder.com/28'}
                alt="Imagem do produto"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <header className="w-full mb-2 text-blue-950">
              <h3>
                {title.length > 40 ? title.substring(0, 40) + '...' : title}
              </h3>
            </header>
            <p className="text-lg text-blue-900 font-bold">{`R$: ${price.toFixed(2)}`}</p>
          </Button>
        </div>
      )}
    </React.Fragment>
  );
}
