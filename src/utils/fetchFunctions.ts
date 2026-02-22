const TOKEN = import.meta.env.VITE_ML_ACCESS_TOKEN;

const headers = {
  'Authorization': `Bearer ${TOKEN}`,
  'Content-Type': 'application/json'
};

export const fetchProduct = async (produto: string) => {
  if (!produto) throw new Error('ID não informado');
  
  const response = await fetch(`https://api.mercadolibre.com/items/${produto}`, { headers });
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (item: string) => {
  if (!item) throw new Error('Termo de busca não informado');
  
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${item}`,
    { headers }
  );
  
  const data = await response.json();
 return data.results || []; 
};

export const fetchProductsByCategoriesList = async (category: string) => {
  if (!category) throw new Error('Termo de busca não informado');
  
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${category}`,
    { headers }
  );
  
  const data = await response.json();
  return data.results || [];
};


