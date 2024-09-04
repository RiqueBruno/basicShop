import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function Content() {
  return (
    <Routes>
      <Route path='/' Component={() => (<h1>Home</h1>)}></Route>
      <Route path='/search?product=:id' Component={() => (<h1>search Product</h1>)}></Route>
      <Route path='/search?category=:id' Component={() => (<h1>search Category</h1>)}></Route>
      <Route path='/cart' Component={() => (<h1>Cart</h1>)}></Route>
      <Route path='/favorite' Component={() => (<h1>favorite</h1>)}></Route>
      <Route path='/product/:id' Component={() => (<h1>Product</h1>)}></Route>
      <Route path='*'>Page Not Found</Route>
    </Routes>
  )
}