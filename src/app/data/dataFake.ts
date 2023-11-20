// Adicione esta função no seu arquivo
function generateRandomDescription() {
  const adjectives = ['Emocionante', 'Incrível', 'Fantástico', 'Surpreendente', 'Aventuresco', 'Divertido'];
  const nouns = ['filme', 'série', 'evento', 'anúncio', 'lançamento', 'projeto'];
  const verbs = ['anuncia', 'traz', 'destaca', 'mostra', 'apresenta', 'revela'];

  const getRandomElement = (array: string[]) => array[Math.floor(Math.random() * array.length)];

  const description = `${getRandomElement(adjectives)} ${getRandomElement(verbs)} um novo ${getRandomElement(nouns)}. Confira agora!`;

  return description;
}

// Modifique a estrutura dos seus dados com a chamada da função
export const dataFake = [
  {
    "id": "1",
    "title": "NOVO HOMEM DE FERRO EM 3D",
    "description": generateRandomDescription(),
    "photoCover": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F51FA9F6CBD9F0C9B1394B1CC0A6A842D07091318674E234CD33CBF7C28CDC3/scale?width=1200&aspectRatio=1.78&format=jpeg"
  },
  {
    "id": "2",
    "title": "Nova Série anunciada no Disney +",
    "description": generateRandomDescription(),
    "photoCover": "https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Series-Marvel-Disney-Plus-1024x576.jpg"
  }
];
