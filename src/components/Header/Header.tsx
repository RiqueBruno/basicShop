import React from 'react';
import logo from '../../assets/icons/logo.svg';
import Input from '../Input/Input';
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
      {/* Logo */}
      <a href="/" className="z-50" aria-label="Página Inicial">
        <img className="h-full w-28 md:p-1" src={logo} alt="logo basic shop" />
      </a>

      {/* Barra de pesquisa */}
      <div className="relative w-60 h-2 flex justify-center items-center z-50 md:w-96">
        <Input
          type="text"
          placeholder="Procure por um Produto"
          value={searchInput}
          onChange={onChange}
          className="h-full w-full rounded-full placeholder:text-sm focus:border-blue-500 md:placeholder:text-base"
        />
        <button
          onClick={() => onClick(`/search?product=${searchInput}`)}
          className="border-none absolute right-2 md:h-6 md:w-6"
          aria-label="Pesquisar Produto"
        >
          <img src={search} alt="" className="h-4 w-6 md:h-full md:w-full" />
        </button>
      </div>

      {/* Navegação */}
      <nav className="absolute flex w-full h-full justify-between items-center pb-10 px-2 md:pb-0 md:px-0 md:w-96 md:relative">
        <div className="flex justify-between items-center">
          <div className="mr-4 z-50">
            <Category />
          </div>

          {/* Favoritos */}
          <button
            onClick={() => onClick('/favorite')}
            className="z-50"
            aria-label="Ver favoritos"
          >
            <span className="hidden md:block md:hover:border-b-2 md:hover:border-blue-500 text-blue-950">
              Favoritos ❤️
            </span>
            <div className="w-8 h-8 border-2 border-blue-500 mr-4 rounded-full flex items-center justify-center md:w-12 md:h-12 md:border-4 md:hidden">
              <img src={heart} alt="" className="w-6 h-6 md:h-8 md:w-8" />
            </div>
          </button>
        </div>

        {/* Perfil e Carrinho */}
        <div className="flex justify-between items-center">
          <button
            className="w-8 h-8 border-2 border-blue-500 mr-4 rounded-full flex items-center justify-center md:w-12 md:h-12 md:border-4"
            aria-label="Abrir perfil de usuário"
          >
            <img src={user} alt="" className="w-6 h-6 md:h-8 md:w-8" />
          </button>

          <div className="w-8 h-8 bg-white border-2 border-blue-500 rounded-full flex justify-center items-center md:w-12 md:h-12">
            <Cart />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
