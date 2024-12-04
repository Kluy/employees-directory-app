import { GET_DATA } from '../actions/shedule.actions';

const initialState = {
  data: {
    employees: [],
  },
};

const employeesReducer = (state = initialState, action) => {
  console.log('get2');

  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default employeesReducer;
