export default async function handler(request, response) {
  const { q } = request.query;
  const TOKEN = process.env.VITE_ML_ACCESS_TOKEN;

  try {
    const mlResponse = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?q=${q}`,
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      },
    );
    const data = await mlResponse.json();
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: 'Erro ao buscar a lista de itens' });
  }
}
