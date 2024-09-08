import React from 'react';
import logo from '../../assets/icons/logo.svg';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Cart from '../Cart/Cart';
import search from '../../assets/icons/search.svg';
import user from '../../assets/icons/user.svg';
import heart from '../../assets/icons/blueheart.svg';
import Category from '../Category/Category';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = React.useState('');

  const onClick = (url: string) => {
    navigate(url);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <header className="relative flex flex-col items-center justify-around bg-yellow-400 w-full h-32 rounded-b-[25%] shadow-md md:h-20 md:justify-between md:p-4 md:rounded-none md:flex-row">
      <Button text="" className="z-50" onClick={() => onClick('/')}>
        <img className="h-full w-28 md:p-1" src={logo} alt="logo basic shop" />
      </Button>
      <div className="relative w-60 h-2 flex justify-center items-center z-50 md:w-96">
        <Input
          type="text"
          placeholder="Procure por um Produto"
          value={searchInput}
          onChange={onChange}
          className="h-full w-full rounded-full placeholder:text-sm focus:border-blue-500 md:placeholder:text-base"
        />
        <Button
          text=""
          onClick={() => onClick(`/search?product=:${searchInput}`)}
          className="border-none absolute right-2 md:h-6 md:w-6"
        >
          <img
            src={search}
            alt="Botão para pesquisar"
            className="h-4 w-6 md:h-full md:w-full"
          />
        </Button>
      </div>
      <nav className="absolute flex w-full h-full justify-between items-center pb-10 px-2 md:pb-0 md:px-0 md:w-96 md:relative">
        <div className="flex justify-between items-center">
          <div className="mr-4 z-50">
            <Category />
          </div>
          <div>
            <div className="z-50">
              <Button text="" onClick={() => onClick('/favorite')}>
                <span className="hidden md:block">Favorites ❤️</span>
                <div className="w-8 h-8 border-2 border-blue-500 mr-4 rounded-full flex items-center justify-center md:w-12 md:h-12 md:border-4 md:hidden">
                  <img
                    src={heart}
                    alt="Botão para favoritos"
                    className="w-6 h-6 md:h-8 md:w-8"
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-8 h-8 border-2 border-blue-500 mr-4 rounded-full flex items-center justify-center md:w-12 md:h-12 md:border-4">
            <img
              src={user}
              alt="Botão para abrir o perfil do usuário"
              className="w-6 h-6 md:h-8 md:w-8"
            />
          </div>
          <div className="w-8 h-8 bg-white border-2 border-blue-500 rounded-full flex justify-center items-center md:w-12 md:h-12">
            <Cart />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
