export const fetchProduct = async (produto: string) => {
  if (!produto) throw new Error('ID não informado');

  const response = await fetch(`/api/product?id=${produto}`);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (item: string) => {
  if (!item) throw new Error('Termo de busca não informado');

  const response = await fetch(`/api/search?q=${item}`);
  const data = await response.json();
  return data.results || [];
};

export const fetchProductsByCategoriesList = async (category: string) => {
  if (!category) throw new Error('ID da categoria não informado');

  const response = await fetch(`/api/category?id=${category}`);
  const data = await response.json();
  return data.results || [];
};
