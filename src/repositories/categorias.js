import config from '../config';

const URL = `${config.BACKEND_URL}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAll() {
  return fetch(URL)
    .then(async (response) => {
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
