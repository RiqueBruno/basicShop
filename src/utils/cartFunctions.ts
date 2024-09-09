import { ItemCart } from "../interfaces/ItemCart";

//Função que retorna todos os itens do carrinho salvos no localStorage.
export const getSavedCart = ():ItemCart[] | [] => {
  const cartProducts = localStorage.getItem('cartProducts');
  return cartProducts ? JSON.parse(cartProducts) : [];
};

//Função que adiciona um product ao carrinho.
export const saveCartProduct = (id: ItemCart[]) => {
  if (!id) throw new Error('Você deve fornecer um ID');
  const newCartProducts = [ ...id];
  localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
};

//Função que remove um product do carrinho.
export const removeCartProduct = (id: ItemCart) => {
  if (!id) throw new Error('Você deve fornecer um ID');

  const cartProducts = [...getSavedCart()];
  const indexProduct = cartProducts.indexOf(id);
  cartProducts.splice(indexProduct, 1);
  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
};
