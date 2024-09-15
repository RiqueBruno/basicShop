import React from 'react';
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
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="w-full h-96 flex justify-center items-center p-2 md:p-8">
        <div className="w-52 h-52 rounded-md bg-gray-300 mb-2 animate-pulse" />
        <div className="w-72 h-full flex flex-col justify-between p-2 md:justify-center">
          <div className="w-3/4 h-10 bg-gray-300 rounded-md mb-2 animate-pulse" />
          <div className="w-20 h-6 bg-gray-300 rounded-md mb-2 animate-pulse" />
          <div className="w-2/4 h-8 bg-gray-300 rounded-md mb-2 animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 overflow-hidden boxShadow">
      <div className="absolute top-0 left-0 flex animate-scroll md:animate-scrollDesktop">
        {items.concat(items).map((item, index) => (
          <article
            key={`${item.id}-${index}-${Math.random()}-Carousel`}
            className="w-96 md:w-[60rem] h-96 flex-shrink-0 flex justify-center items-center mx-12 md:mx-0 md:bg-transparent p-6 md:p-2"
          >
            <div className="w-96 h-90 rounded-md bg-white border border-transparent flex items-center justify-center">
              <img
                src={
                  item.product.thumbnail.replace('-I.jpg', '-O.jpg') ||
                  'https://via.placeholder.com/150'
                }
                alt={item.product.title}
                className="w-52 h-52 rounded-md"
              />
            </div>
            <div className="w-96 h-90 flex flex-col justify-between p-2">
              <h2 className="text-sm md:text-3xl mb-4 font-bold w-full text-center text-white">
                {item.category}
              </h2>
              <Button
                text="Ver mais"
                className="bg-gradient-to-t from-yellow-400 to-yellow-200 text-blue-600 font-bold p-2 rounded-md mt-2"
                onClick={() => {
                  navigate(`/search?category=${item.product.category_id}`);
                }}
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
