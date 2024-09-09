import React, { createContext, useState } from 'react';
import { ItemCart } from '../interfaces/ItemCart';

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartContextType {
  cartItems: ItemCart[];
  setCartItems: React.Dispatch<React.SetStateAction<ItemCart[]>>;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<ItemCart[]>([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
