import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CartProvider>
        <Header />
        <Content />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
