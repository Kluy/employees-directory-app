const baseUrl = 'https://api.iev.aero/api/flights/';

export const getFlights = (date) => {
  return fetch(`${baseUrl}${date}`)
    .then((response) => response.json())
    .catch(() => console.log('Internal Server Error. Can"t display flights'));
};
