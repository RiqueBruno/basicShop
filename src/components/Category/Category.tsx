import React, { useState } from 'react';
import { Categories } from '../../utils/categories';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export default function Category() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onClick = (id: string) => {
    navigate(`/search?category=${id}`);
  };

  return (
<div className="relative">
      <Button
        id="dropdownDefaultButton"
        text=''
        onClick={toggleDropdown}
        className="relative text-blue-950 hover:border-b-2 hover:border-blue-500"
        type="button"
      >
        Categorias ▼
      </Button>
      {isOpen && (
        <div
          id="dropdown"
          className="absolute right-0 z-10 bg-yellow-500 divide-y divide-gray-100 rounded-lg shadow w-44"
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
