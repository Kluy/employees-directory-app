import { FLIGHT_NUMBER, SAVE_SHEDULE, TOGGLE } from './shedule.actions';

const initialState = {
  shedule: {
    departure: [],
    arrival: [],
  },
  departure: true,
  flightNumber: null,
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
        flightNumber: null,
      };
    case TOGGLE:
      return {
        ...state,
        departure: !state.departure,
        flightNumber: null,
      };
    default:
      return state;
  }
};

export default sheduleReducer;
