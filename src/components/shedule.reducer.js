import { SAVE_SHEDULE, TOGGLE } from './shedule.actions';

const initialState = {
  shedule: {
    body: [],
    // departure: [],
    // arrival: [],
  },
  departure: true,
};

const sheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SHEDULE:
      return {
        ...state,
        shedule: action.payload.shedule,
      };
    case TOGGLE:
      return {
        ...state,
        departure: !state.departure,
      };
    default:
      return state;
  }
};

export default sheduleReducer;
