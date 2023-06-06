const baseUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

export const getToken = () =>
  fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then(response => response.json())
    .then(result => result.token)
    .catch(error => console.log(error));

export const getUsers = page => {
  return fetch(`${baseUrl}users?page=${page}&count=6`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.success) {
        return data;
      } else {
        console.log(data.message);
      }
    });
};

export const getPositions = () => {
  return fetch(`${baseUrl}positions`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.success) {
        return data.positions;
      } else {
        console.log(data.message);
      }
    });
};

export const postUser = (newUser, token) =>
  fetch(`${baseUrl}users`, {
    method: 'POST',
    headers: {
      Token: token,
    },
    body: createFormData(newUser),
  })
    .then(response => response.json())
    .then(result => {
      console.log(result.fails);
    })
    .catch(error => console.log('error  ' + error));

const createFormData = user => {
  const formData = new FormData();
  for (const prop in user) {
    formData.append(prop, user[prop]);
  }
  return formData;
};
