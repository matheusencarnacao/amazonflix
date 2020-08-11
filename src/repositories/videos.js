import config from '../config';

const URL_VIDEOS = `${config.BACKEND_URL}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (response) => {
      if (response.ok) {
        const json = await response.json();
        return json;
      }

      throw new Error('Não foi possível carregar os dados :(');
    });
}

export default {
  create,
};
