import { SAVE_SHEDULE } from './shedule.actions';

const initialState = {
  shedule: {
    body: [],
  },
};

const sheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SHEDULE:
      return {
        ...state,
        shedule: action.payload.shedule,
      };
    default:
      return state;
  }
};

export default sheduleReducer;
