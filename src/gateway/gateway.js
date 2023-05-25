const baseUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

// export const getFlights = date => {
//   return fetch(`${baseUrl}${date}`)
//     .then(response => response.json())
//     .catch(() => console.log('Internal Server Error. Can"t display flights'));
// };

export const getToken = () => {
  return fetch(`${baseUrl}token`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const fetchData = () =>
  fetch(`${baseUrl}users?page=1&count=6`)
    .then(response => response.json())
    .catch(() => alert('Internal Server Error. Can"t display events'));

export const getUsers = () =>
  fetch(`${baseUrl}users?page=1&count=6`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.success) {
        return data.users;
      } else {
        console.log(data.message);
      }
    });
