import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'

export default function Content() {
  return (
    <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path='/search?product=:id' Component={() => (<h1>search Product</h1>)}></Route>
      <Route path='/search?category=:id' Component={() => (<h1>search Category</h1>)}></Route>
      <Route path='/cart' Component={() => (<h1>Cart</h1>)}></Route>
      <Route path='/favorite' Component={() => (<h1>favorite</h1>)}></Route>
      <Route path='/product/:id' Component={() => (<h1>Product</h1>)}></Route>
      <Route path='*'>Page Not Found</Route>
    </Routes>
  )
}