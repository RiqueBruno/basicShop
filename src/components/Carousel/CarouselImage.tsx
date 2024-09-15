import React, { useState } from 'react';
import Button from '../Button/Button';

interface CarouselProps {
  pictures: string[];
}

const CarouselImage: React.FC<CarouselProps> = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <article className="w-full h-full flex flex-col md:flex-row md:justify-around md:items-start p-2 md:p-8">
      <div className="w-full md:w-[90%] h-90 rounded-md bg-white border border-transparent flex items-center justify-center md:bg-contain md:h-full">
        <img
          src={
            pictures[currentIndex].replace('-I.jpg', '-O.jpg') ||
            'https://via.placeholder.com/150'
          }
          alt="Imagem do produto"
          className="w-52 h-52 rounded-md md:bg-contain md:bg-center"
        />
      </div>
      <div className="h-full w-full md:w-[10%] flex md:flex-col flex-wrap md:flex-nowrap justify-center items-center md:items-start md:justify-normal">
        {pictures.map((item, index) => (
          <Button
            key={`${index}-${Math.random()}-CarouselImage`}
            onClick={() => setCurrentIndex(index)}
            text=""
            className={`w-8 h-8 ${currentIndex === index ? 'border-2 border-blue-400' : 'border-2 border-gray-100'}`}
          >
            <img
              src={item.replace('-I.jpg', '-O.jpg')}
              alt={`Imagem do produto número ${index + 1}`}
              className="max-h-full max-w-full bg-contain"
            />
          </Button>
        ))}
      </div>
    </article>
  );
};

export default CarouselImage;
