const baseUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

export const getToken = () =>
  fetch(`${baseUrl}token`)
    .then(response => response.json())
    .then(result => result.token)
    .catch(error => console.log(error));

export const getUsers = page =>
  fetch(`${baseUrl}users?page=1&count=${page}`)
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        return data;
      } else {
        console.log(data.message);
      }
    });

export const getPositions = () =>
  fetch(`${baseUrl}positions`)
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        return data.positions;
      } else {
        console.log(data.message);
      }
    });

export const postUser = (newUser, token) =>
  fetch(`${baseUrl}users`, {
    method: 'POST',
    headers: {
      Token: token,
    },
    body: newUser,
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        return data;
      } else {
        console.log(data.message);
      }
    })
    .catch(error => console.log(error));
