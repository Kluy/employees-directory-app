import { getUsers } from '../../gateway/gateway';

export const GET_DATA = 'DATA/GET_DATA';

const saveData = ({ users, page, total_pages, count }) => {
  return {
    type: GET_DATA,
    payload: {
      users,
      page,
      totalPages: total_pages,
      count,
    },
  };
};

export const getUsersAction = input => {
  return function (dispatch) {
    getUsers(input).then(result => {
      dispatch(saveData(result));
    });
  };
};
