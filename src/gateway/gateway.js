const baseUrl = 'https://66a0f8b17053166bcabd894e.mockapi.io/api/workers';
// const baseUrl = 'https://66a0f8b17053166bcabd894.mockapi.io/api/workers';

export const getWorkers = () =>
  fetch(baseUrl)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return new Error(error);
    });
