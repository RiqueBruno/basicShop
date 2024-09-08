import React, { useState } from 'react';
import { Categories } from '../../utils/categories';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import menu from '../../assets/icons/menu.svg';

export default function Category() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onClick = (id: string) => {
    navigate(`/search?category=${id}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        id="dropdownDefaultButton"
        text=""
        onClick={toggleDropdown}
        className="relative flex items-center justify-center text-blue-950 md:hover:border-b-2 md:hover:border-blue-500"
        type="button"
      >
        <span className="hidden md:block">Categorias ▼</span>
        <div className="w-8 h-8 border-2 border-blue-500 rounded-full flex items-center justify-center md:w-12 md:h-12 md:border-4 md:hidden">
          <img
            src={menu}
            className="w-6 h-6 md:h-8 md:w-8"
            alt="Botão do menu de categorias"
          />
        </div>
      </Button>
      {isOpen && (
        <div
          id="dropdown"
          className="absolute  md:right-0 z-10 bg-yellow-500 divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <ul
            className="py-2 text-sm text-blue-950 w-full"
            aria-labelledby="dropdownDefaultButton"
          >
            {Categories.map((category) => (
              <li key={category.id}>
                <Button
                  text={category.name}
                  onClick={() => onClick(category.id)}
                  className="block w-full px-4 py-2 text-blue-950 hover:bg-blue-500 hover:text-white"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
