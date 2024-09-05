import React from 'react';
import logo from '../../assets/icons/logo.svg';
import Input from '../Input/Input';
import Button from '../Button/Button';

import search from '../../assets/icons/search.svg';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = React.useState('');

  const onClick = () => {
    navigate(`/search?product=:${searchInput}`);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <header className="bg-yellow-400 w-full h-20 flex justify-between pl-4">
      <img className="h-full w-28 p-1" src={logo} alt="logo basic shop" />
      <div className="relative flex justify-center items-center">
        <Input
          type="text"
          placeholder="Procure por um Produto"
          value={searchInput}
          onChange={onChange}
          className="h-full w-full rounded-full placeholder-gray-500 focus:placeholder-yellow-950"
        />
        <Button
          text=""
          onClick={onClick}
          className="h-6 w-6 border-none absolute right-2"
        >
          <img
            src={search}
            alt="Botão para pesquisar"
            className="h-full w-full"
          />
        </Button>
      </div>
      <nav className='flex justify-between w-96'>
        <div className="flex justify-between">
          <div>Categories</div>
          <div>Favorites</div>
        </div>
        <div className="flex justify-between">
          <div>Profile</div>
          <div>Cart</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
