import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import Product from '../pages/Product/Product';
import Favorite from '../pages/Favorite/Favorite';

export default function Content() {
  return (
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/search" Component={Search}></Route>
      <Route path="/cart" Component={() => <h1>Cart</h1>}></Route>
      <Route path="/favorite" Component={Favorite}></Route>
      <Route path="/product/:id" Component={Product}></Route>
      <Route path="*">Page Not Found</Route>
    </Routes>
  );
}
