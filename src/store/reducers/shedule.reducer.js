import { GET_DATA } from '../actions/shedule.actions';

const initialState = {
  data: {
    users: [],
    page: 1,
    totalPages: null,
    count: 6,
  },
};

const usersReducer = (state = initialState, action) => {
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

export default usersReducer;
