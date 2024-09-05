import { Item } from "../interfaces/Item";

//Função que retorna todos os itens do carrinho salvos no localStorage.
export const getSavedCartIDs = ():Item[] | [] => {
  const cartProducts = localStorage.getItem('cartProducts');
  return cartProducts ? JSON.parse(cartProducts) : [];
};

//Função que adiciona um product ao carrinho.
export const saveCartID = (id: Item) => {
  if (!id) throw new Error('Você deve fornecer um ID');

  const cartProducts = getSavedCartIDs();
  const newCartProducts = [...cartProducts, id];
  localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
};

//Função que remove um product do carrinho.
export const removeCartID = (id: Item) => {
  if (!id) throw new Error('Você deve fornecer um ID');

  const cartProducts = [...getSavedCartIDs()];
  const indexProduct = cartProducts.indexOf(id);
  cartProducts.splice(indexProduct, 1);
  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
};
