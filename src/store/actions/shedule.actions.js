import { fetchUsers } from '../../gateway/gateway';

export const GET_USERS = 'USERS/GET_USERS';

const saveUsers = users => {
  return {
    type: GET_USERS,
    payload: {
      users,
    },
  };
};

export const getUsersAction = input => {
  return function (dispatch) {
    getUsers(input).then(result => dispatch(saveUsers(result.body)));
  };
};
