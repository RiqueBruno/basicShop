export const fetchProduct = async (produto: string) => {
  if (!produto) throw new Error('ID não informado');
  const response = await fetch(`https://api.mercadolibre.com/items/${produto}`);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (item: string)=> {
  if (!item) throw new Error('Termo de busca não informado');
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${item}`,
  );
  const { results } = await response.json();
  return results;
};

export const fetchProductsByCategoriesList = async (category: string) => {
  if (!category) throw new Error('Termo de busca não informado');
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${category}`,
  );
  const { results } = await response.json();
  return results;
};
