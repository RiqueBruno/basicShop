import React from 'react';
import { ItemCart } from '../../interfaces/ItemCart';
import { favProduct } from '../../interfaces/favProductInterface';
import heart from '../../assets/icons/heart.svg';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

type TableProps = {
  favorites: favProduct[];
  cart: ItemCart[];
  type: 'favorite' | 'cart';
  onRemoveFavorite: (id: string) => void;
  onRemoveCart: (id: string) => void;
  onAddCart: (id: string) => void;
};

type thF = [string[], string[]];

export default function Table({
  favorites,
  cart,
  type,
  onRemoveFavorite,
  onAddCart,
  onRemoveCart,
}: TableProps) {
  const navigate = useNavigate();
  const thFav: thF = [
    [' ', 'Nome', 'Favorito'],
    ['Produto', 'Quantidade', 'Preço'],
  ];
  const isFavorite = type === 'favorite' ? thFav[0] : thFav[1];

  return (
    <table className="w-full h-full overflow-y-scroll">
      <thead>
        <tr>
          {isFavorite?.map((th, index) => (
            <th key={index} className="text-start pl-2">{`${th}`}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {type === 'favorite'
          ? favorites.map((favorite, index) => (
              <tr key={index} className="border-2 rounded-md">
                <td className="w-20 h-20 flex justify-end">
                  <img
                    src={favorite.thumbnail}
                    alt={favorite.title}
                    className="h-20 w-20"
                  />
                </td>
                <td className="w-3/4 h-full pl-2">
                  <Button
                    onClick={() => navigate(`/product/${favorite.id}`)}
                    text=""
                    className="flex justify-center items-center flex-col text-center cursor-pointer hover:text-blue-700 md:flex-row"
                  >
                    {favorite.title?.length && favorite.title.length > 20
                      ? favorite.title.substring(0, 20) + '...'
                      : favorite.title}
                  </Button>
                </td>
                <td className="w-20 h-20 flex items-start justify-start">
                  <button
                    id={favorite.id}
                    onClick={() => onRemoveFavorite(favorite.id ?? '')}
                    className="flex items-center justify-center h-full w-full"
                  >
                    <img
                      src={heart}
                      id={favorite.id}
                      alt="favorito. clique para desfavoritar o produto"
                      className="h-16 w-16 hover:scale-110"
                    />
                  </button>
                </td>
              </tr>
            ))
          : cart.map((c, index) => (
              <tr key={index} className="border-2 rounded-md">
                <td className="w-1/3 h-full">
                  <Button
                    className="flex justify-center items-center flex-col text-center cursor-pointer hover:text-blue-700 md:flex-row"
                    text=""
                    onClick={() => navigate(`/product/${c.id}`)}
                  >
                    <img src={c.thumbnail} alt={c.title} />
                    {c.title?.length && c.title.length > 20
                      ? c.title.substring(0, 20) + '...'
                      : c.title}
                  </Button>
                </td>
                <td className="w-full h-full flex items-center justify-center">
                  <div className="flex items-center justify-center">
                    <button
                      id={c.id}
                      onClick={() => onRemoveCart(c.id)}
                      className="flex items-center justify-center h-6 w-6 rounded-md hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span>{c.quantity}</span>
                    <button
                      id={c.id}
                      onClick={() => onAddCart(c.id)}
                      className="flex items-center justify-center h-6 w-6 rounded-md hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="text-center">{`R$ ${(c.quantity * c.price).toFixed(2)}`}</td>
              </tr>
            ))}
      </tbody>
    </table>
  );
}
