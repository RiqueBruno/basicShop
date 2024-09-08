import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Item } from '../../interfaces/Item';
import Button from '../Button/Button';

interface HighlightedItem {
  id: string;
  category: string;
  product: Item;
}

interface CarouselProps {
  items: HighlightedItem[];
  category?: string;
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const navegate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [items.length]);

  if (items.length === 0) {
    return (
      <div className="w-full h-4 bg-gray-300 rounded-md mb-2 animate-pulse" />
    );
  }

  const currentItem = items[currentIndex];

  return (
    <article className="w-full h-56 flex justify-start p-2">
      <div className="w-[50%] h-full rounded-md bg-white border border-transparent">
        <img
          src={
            currentItem.product.thumbnail.replace('-I.jpg', '-O.jpg') ||
            'https://via.placeholder.com/150'
          }
          alt={currentItem.product.title}
          className="w-52 h-52 rounded-md"
        />
      </div>
      <div className="w-[50%] h-full flex flex-col justify-between p-2">
        <h2 className="text-lg font-bold w-full text-center text-white">
          {currentItem.category}
        </h2>
        <Button
          text="Ver mais"
          className="bg-gradient-to-t from-yellow-400 to-yellow-200 text-blue-600 font-bold p-2 rounded-md mt-2"
          onClick={() => {
            navegate(`/search?category=${currentItem.product.id}`);
          }}
        />
      </div>
    </article>
  );
};

export default Carousel;
