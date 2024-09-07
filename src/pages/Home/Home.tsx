import React, { useEffect, useState } from 'react';
import { fetchProductsByCategoriesList } from '../../utils/fetchFunctions';
import CategoryProduct from '../../components/CategoryProduct/CategoryProduct';
import { Item } from '../../interfaces/Item';

interface ContrastProduct {
  category: string;
  product: Item;
}

export default function Home() {
  const [category, setCategory] = useState<{ [key: string]: Item[] }>({
    cat1: [],
    cat2: [],
    cat3: [],
  });
  const [contrast, setContrast] = useState<ContrastProduct[]>([]);

  useEffect(() => {
    const cat1 = fetchProductsByCategoriesList('MLB1648');
    const cat2 = fetchProductsByCategoriesList('MLB1051');
    const cat3 = fetchProductsByCategoriesList('MLB1574');
    const con1 = fetchProductsByCategoriesList('MLB1071');
    const con2 = fetchProductsByCategoriesList('MLB1246');
    const con3 = fetchProductsByCategoriesList('MLB1132');
    const con4 = fetchProductsByCategoriesList('MLB1430');

    Promise.all([cat1, cat2, cat3, con1, con2, con3, con4]).then((values) => {
      setCategory({
        cat1: values[0].slice(0, 20),
        cat2: values[1].slice(0, 20),
        cat3: values[2].slice(0, 20),
      });
      setContrast([
        { category: 'Beleza e Cuidado Pessoal', product: values[3][0] },
        { category: 'Brinquedos e Hobbies', product: values[4][0] },
        { category: 'Calçados, Roupas e Bolsas', product: values[5][0] },
        { category: 'Animais', product: values[6][0] },
      ]);
    });
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <section className="hidden md:block">
        <h2>Contrast Products</h2>
      </section>
      <div>
        <CategoryProduct products={category.cat1} category="Informática" />
        <CategoryProduct products={category.cat2} category="Celulares" />
        <CategoryProduct products={category.cat3} category="Casa" />
      </div>
    </main>
  );
}
