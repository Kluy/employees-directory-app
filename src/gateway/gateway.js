const baseUrl = 'https://66a0f8b17053166bcabd894e.mockapi.io/api/workers';

export const getWorkers = () =>
  fetch(baseUrl)
    .then(response => response.json())
    .catch(() => console.log('Internal Server Error.'));
