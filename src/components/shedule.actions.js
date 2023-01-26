import { getFlights } from '../gateway';

export const SAVE_SHEDULE = 'SHEDULE/SAVE_SHEDULE';
export const TOGGLE = 'SHEDULE/TOGGLE';

const saveShedule = (shedule) => {
  return {
    type: SAVE_SHEDULE,
    payload: {
      shedule,
    },
  };
};

export const departureToggle = () => {
  return {
    type: TOGGLE,
  };
};

export const getSheduleAction = (input) => {
  return function (dispatch) {
    getFlights(input).then((result) => dispatch(saveShedule(result)));
  };
};
