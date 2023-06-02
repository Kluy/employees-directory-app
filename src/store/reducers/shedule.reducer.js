import { GET_USERS } from '../actions/shedule.actions';

const initialState = {
  data: {
    users: [],
    page: 1,
    total_pages: null,
  },
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload.users,
      };
    default:
      return state;
  }
};

export default usersReducer;
