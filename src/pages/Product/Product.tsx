import React, { useContext, useEffect, useState } from 'react';
import { fetchProduct } from '../../utils/fetchFunctions';
import { Item, picturesObj } from '../../interfaces/Item';
import Button from '../../components/Button/Button';
import addCart from '../../assets/icons/addCart.svg';
import savedCart from '../../assets/icons/savedCart.svg';
import CarouselImage from '../../components/Carousel/CarouselImage';
import { ItemCart } from '../../interfaces/ItemCart';
import { saveCartProduct } from '../../utils/cartFunctions';
import { CartContext } from '../../context/CartContext';
import Heart from '../../components/Heart/Heart';

export default function Product() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<Item>();
  const [pictures, setPictures] = useState<string[]>([]);
  const [onCart, setOnCart] = useState<boolean>();
  const [checked, setChecked] = useState<boolean>(false);

  const urlPath = window.location.pathname;
  const searchParams = urlPath.split('/');

  const cartContext = useContext(CartContext);
  if (!cartContext) return null;
  const { cartItems, setCartItems } = cartContext;

  useEffect(() => {
    const fetchP = async () => {
      try {
        const data = await fetchProduct(searchParams[2]);
        const resolv = await Promise.resolve(data);
        const pics = resolv.pictures.map((item: picturesObj) => item.url);
        setProduct(resolv);
        setIsLoading(false);
        setPictures([resolv.thumbnail, ...pics.slice(1, 8)]);

        const hasProdct = cartItems.some((item) => item.id === resolv.id);

        setOnCart(hasProdct);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    };
    fetchP();
  }, [onCart]);

  const onClick = () => {
    try {
      if (!product) return;

      const prodct: ItemCart = {
        id: product.id,
        price: product.price,
        quantity: 1,
        thumbnail: product.thumbnail,
        title: product.title,
      };
      const newCart = [...cartItems, prodct];
      setCartItems(newCart);
      saveCartProduct(newCart);
      setOnCart(true);
    } catch (error) {
      console.error('Erro ao salvar produto no carrinho:', error);
    }
  };

  const removeItem = (id: string) => {
    try {
      const newCart = cartItems.filter((item) => item.id !== id);
      setCartItems(newCart);
      saveCartProduct(newCart);
      setOnCart(false);
    } catch (error) {
      console.error('Erro ao remover produto do carrinho:', error);
    }
  };

  return (
    <main className="w-full h-full">
      {isLoading ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 mt-10">
          <div className="w-[98%] h-96 flex border-2 border-blue-400 rounded-md md:w-[80%]">
            <div className="w-[46%] flex items-center justify-center border-r-2 border-gray-100 md:w-[50%] bg-gray-200 animate-pulse"></div>
            <div className="w-[54%] flex flex-col items-start justify-center pl-4 md:w-[50%]">
              <h1 className="text-blue-950 text-base mb-2 max-h-40 overflow-hidden w-40 md:w-[90%] bg-gray-200 animate-pulse"></h1>
              <div className="mb-4 h-10 w-10 bg-gray-200 animate-pulse"></div>
              <h2 className="pb-4 bg-gray-200 animate-pulse"></h2>
              <div className="w-full flex md:items-center"></div>
            </div>
          </div>
        </div>
      ) : (
        <section className="w-full h-full flex flex-col items-center justify-center p-4 mt-10">
          <article className="w-[98%] h-96 flex border-2 border-blue-400 rounded-md md:w-[80%]">
            <div className="w-[46%] flex items-center justify-center border-r-2 border-gray-100 md:w-[50%]">
              <CarouselImage pictures={pictures} />
            </div>
            <div className="w-[54%] flex flex-col items-start justify-center pl-4 md:w-[50%]">
              <h1 className="text-blue-950 text-base mb-2 max-h-40 overflow-hidden w-40 md:w-[90%]">
                {product?.title}
              </h1>
              <div className="mb-4">⭐⭐⭐⭐⭐</div>
              <h2 className="text-blue-950 text-2xl pb-4">{`R$ ${product?.price.toFixed(2)}`}</h2>
              <div className="w-full flex md:items-center">
                {onCart ? (
                  <Button
                    text=""
                    onClick={() => removeItem(product?.id || '')}
                    className={`w-2/4 md:w-2/4 text-white bg-gradient-to-b to-red-800 from-red-400 rounded-md py-1 mt-2 flex items-center justify-center hover:from-red-600 hover:to-red-900 cursor-pointer `}
                  >
                    <p className="hidden md:block mx-4 md:w-full text-center">
                      Remover ao carrinho
                    </p>
                    <img
                      src={savedCart}
                      alt="Item já está no carrinho"
                      className="h-10 w-10 md:hidden"
                    />
                  </Button>
                ) : (
                  <Button
                    text=""
                    onClick={onClick}
                    className="w-2/4 md:w-2/4 text-white bg-gradient-to-b to-blue-800 from-blue-400 rounded-md py-1 mt-2 flex items-center justify-center hover:from-blue-600 hover:to-blue-900 cursor-pointer"
                  >
                    <p className="hidden md:block md:mx-4 text-center">
                      Adicionar ao carrinho
                    </p>
                    <img
                      src={addCart}
                      alt="botão Adicionar ao Carrinho"
                      className="h-10 w-10 md:hidden"
                    />
                  </Button>
                )}
                <div className="w-2/4 md:w-1/4 flex items-center justify-center">
                  <Heart
                    product={product}
                    checked={checked}
                    setChecked={setChecked}
                    value={product?.id || ''}
                  />
                </div>
              </div>
              <div className="w-full text-gray-600 text-sm">
                <p>{`Quantidade: ${product?.initial_quantity}`}</p>
                <p>{product?.warranty}</p>
              </div>
            </div>
          </article>
          <article className="w-[98%] h-auto min-h-80 flex border-2 border-blue-400 rounded-md mt-10 justify-center p-4 md:w-[80%]">
            <div className="w-3/4 flex flex-col items-center">
              <h1 className="text-blue-950 text-lg">Descrição</h1>
              <hr className="w-full border-2 border-blue-400" />
              <p className="text-blue-950 text-center my-4">{product?.title}</p>
              <p className="text-blue-950 text-center mb-6">
                {product?.descriptions[0]?.toString()}
              </p>
              <h1 className="text-blue-950 text-lg">Especificações</h1>
              <hr className="w-full border-2 border-blue-400 mb-4" />
              <div className="w-full flex flex-col items-center">
                {product?.attributes.map((item) => (
                  <p key={item.name} className="text-blue-950 text-center my-2">
                    {`${item.name}: ${item.value_name}`}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </section>
      )}
    </main>
  );
}
