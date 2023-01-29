import { getFlights } from '../gateway';

export const SAVE_SHEDULE = 'SHEDULE/SAVE_SHEDULE';
export const DEPARTURE_TOGGLE = 'SHEDULE/DEPARTURE_TOGGLE';
export const FLIGHT_NUMBER = 'SHEDULE/FLIGHT_NUMBER';
// export const CHOOSE_DATE = 'SHEDULE/FLIGHT_NUMBER';

const saveShedule = (shedule) => {
  return {
    type: SAVE_SHEDULE,
    payload: {
      shedule,
    },
  };
};

export const flightNumberAction = (flightNumber) => {
  return {
    type: FLIGHT_NUMBER,
    payload: {
      flightNumber,
    },
  };
};

export const toggleAction = () => {
  return {
    type: DEPARTURE_TOGGLE,
  };
};

export const getSheduleAction = (input) => {
  return function (dispatch) {
    getFlights(input).then((result) => dispatch(saveShedule(result.body)));
  };
};
