import { FLIGHT_NUMBER, SAVE_SHEDULE, TOGGLE } from './shedule.actions';

const initialState = {
  shedule: {
    departure: [],
    arrival: [],
  },
  departure: true,
  flightNumber: '',
};

const sheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_NUMBER:
      return {
        ...state,
        flightNumber: action.payload.flightNumber,
      };
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
