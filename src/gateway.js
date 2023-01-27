const baseUrl = 'https://api.iev.aero/api/flights/';

export const getFlights = (date) => {
  return fetch(`${baseUrl}${date}`).then((response) => response.json());
  // .catch(() => alert('Internal Server Error. Can"t display flights'));
};
