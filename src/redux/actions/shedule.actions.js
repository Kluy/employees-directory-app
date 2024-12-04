import { getEmployees } from '../../entities/employee/gateway/gateway';

export const GET_DATA = 'DATA/GET_DATA';

const saveData = employees => {
  return {
    type: GET_DATA,
    payload: {
      employees,
    },
  };
};

export const getEmployeesAction = input => {
  console.log('get');
  return function (dispatch) {
    getEmployees(input).then(result => {
      dispatch(saveData(result));
    });
  };
};
