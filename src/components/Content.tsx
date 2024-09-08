import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';

export default function Content() {
  return (
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/search?product=:id" Component={Search}></Route>
      <Route path="/search?category=:id" Component={Search}></Route>
      <Route path="/cart" Component={() => <h1>Cart</h1>}></Route>
      <Route path="/favorite" Component={() => <h1>favorite</h1>}></Route>
      <Route path="/product/:id" Component={() => <h1>Product</h1>}></Route>
      <Route path="*">Page Not Found</Route>
    </Routes>
  );
}
