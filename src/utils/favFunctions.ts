import { favProduct } from "../interfaces/favProductInterface";

export const getFavorites = ():favProduct[] | [] => {
  const cartProducts = localStorage.getItem('favProducts');
  return cartProducts ? JSON.parse(cartProducts) : [];
};

export const saveFavProduct = (item: favProduct) => {
  if (!item) throw new Error('Você deve fornecer um ID');
  const favs = getFavorites();
  const newCartProducts = [ ...favs, item];
  localStorage.setItem('favProducts', JSON.stringify(newCartProducts));
};

export const removeFavProduct = (id: favProduct) => {
  if (!id) throw new Error('Você deve fornecer um ID');

  const favProduct = [...getFavorites()];
  const indexProduct = favProduct.indexOf(id);
  favProduct.splice(indexProduct, 1);
  localStorage.setItem('favProducts', JSON.stringify(favProduct));
};
