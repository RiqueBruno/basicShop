import React, { ComponentProps } from 'react';
import heart from '../../assets/icons/heart.svg';
import heartGray from '../../assets/icons/heartGray.svg';
import { Item } from '../../interfaces/Item';
import {
  getFavorites,
  removeFavProduct,
  saveFavProduct,
} from '../../utils/favFunctions';
import { favProduct } from '../../interfaces/favProductInterface';

type HeartProps = ComponentProps<'input'> & {
  checked: boolean;
  setChecked: (checked: boolean | ((prev: boolean) => boolean)) => void;
  value: string | boolean;
  product: Item | undefined;
};

export default function Heart({
  checked,
  setChecked,
  value,
  product,
}: HeartProps) {
  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setChecked((prev: boolean) => !prev);
    const favProduct = {
      id: product?.id,
      title: product?.title,
      thumbnail: product?.thumbnail,
    };
    if (isChecked) {
      saveFavorite(favProduct); // Se estiver checado, salva como favorito
    } else {
      removeFavProduct(favProduct); // Se desmarcado, remove dos favoritos
    }
  };
  const isFavorite = () => {
    const favorites = getFavorites();
    const hasFavorite = favorites.some((item) => item.id === product?.id);
    if (hasFavorite) {
      setChecked(hasFavorite);
    }
  };

  const saveFavorite = (favProduct: favProduct) => {
    try {
      saveFavProduct(favProduct);
      setChecked(true);
    } catch (error) {
      console.error('Erro ao salvar produto nos favoritos:', error);
    }
  };

  isFavorite();

  return (
    <label
      htmlFor="heart"
      className="h-14 w-14 flex items-center justify-center p-2 md:cursor-pointer"
    >
      <input
        type="checkbox"
        name="heart"
        id="heart"
        checked={checked}
        onChange={onCheck}
        value={value}
        className="hidden"
      />
      <div>
        <img
          src={heart}
          alt="Está em seus favoritos"
          className={`${checked ? 'animate-heartPulse h-full w-full' : 'hidden'}`}
        />
        <img
          src={heartGray}
          alt="Não está em seus favoritos"
          className={`${checked ? 'hidden' : 'animate-heartPulseInverse h-full w-full'}`}
        />
      </div>
    </label>
  );
}
