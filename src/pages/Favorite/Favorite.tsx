import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/Table';
import { getFavorites, removeFavProduct } from '../../utils/favFunctions';
import { favProduct } from '../../interfaces/favProductInterface';

export default function Favorite() {
  const [favorites, setFavorites] = useState<favProduct[]>(getFavorites());

  useEffect(() => {
    const favorite = getFavorites();
    setFavorites(favorite);
  }, []);

  const handleRemoveFavorite = (id: string) => {
    const product = favorites.find((favorite) => favorite.id === id);
    if (product) {
      removeFavProduct(product);
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favorite) => favorite.id !== id),
      );
    }
  };

  return (
    <div className="w-full h-auto flex items-center justify-center pt-10">
      <Table
        type="favorite"
        favorites={favorites}
        onRemoveFavorite={handleRemoveFavorite}
        onRemoveCart={() => {}}
      />
    </div>
  );
}
