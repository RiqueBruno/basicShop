import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import Product from '../pages/Product/Product';

export default function Content() {
  return (
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/search" Component={Search}></Route>
      <Route path="/cart" Component={() => <h1>Cart</h1>}></Route>
      <Route path="/favorite" Component={() => <h1>favorite</h1>}></Route>
      <Route path="/product/:id" Component={Product}></Route>
      <Route path="*">Page Not Found</Route>
    </Routes>
  );
}
