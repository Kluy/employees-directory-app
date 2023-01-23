const baseUrl = 'https://api.iev.aero/api/flights/';

export const fetchEvent = (eventId) =>
  fetch(`${baseUrl}${eventId}`)
    .then((response) => response.json())
    .catch(() => alert('Internal Server Error. Can"t display flights'));
