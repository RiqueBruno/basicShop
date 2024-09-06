import React from 'react';
import logo from '../../assets/icons/logo.svg';
import Input from '../Input/Input';
import Button from '../Button/Button';

import { useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import search from '../../assets/icons/search.svg';
import user from '../../assets/icons/user.svg';
import heart from '../../assets/icons/blueheart.svg';

function Header() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = React.useState('');

  const onClick = (url:string) => {
    navigate(url);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <header className="bg-yellow-400 w-full h-20 flex justify-between p-4">
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
          onClick={() => onClick(`/search?product=:${searchInput}`)}
          className="h-6 w-6 border-none absolute right-2"
        >
          <img
            src={search}
            alt="Botão para pesquisar"
            className="h-full w-full"
          />
        </Button>
      </div>
      <nav className="flex justify-between w-96">
        <div className="flex justify-between items-center">
          <div className="mr-4">Categories 🔽</div>
          <div>
            <div>
              <Button text="" onClick={() => onClick('/favorite')}>
                <span>Favorites ❤️</span>
                <div className="w-12 h-12 border-4 border-blue-500 mr-4 rounded-full flex items-center justify-center lg:hidden">
                  <img src={heart} alt="Botão para favoritos" className="h-8 w-8" />
                </div>
              </Button>
            </div>
            <div className="w-12 h-12 border-4 border-blue-500 mr-4 rounded-full flex items-center justify-center lg:hidden">
              ❤️
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-12 h-12 border-4 border-blue-500 mr-4 rounded-full flex items-center justify-center">
            <img src={user} alt="" className="h-8 w-8" />
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
            <Cart />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
