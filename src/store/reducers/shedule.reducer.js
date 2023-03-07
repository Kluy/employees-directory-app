import { FLIGHT_NUMBER, SAVE_SHEDULE, DEPARTURE_TOGGLE } from '../actions/shedule.actions';

const initialState = {
  shedule: {
    departure: [],
    arrival: [],
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
