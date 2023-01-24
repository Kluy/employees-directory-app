import { getFlights } from '../../gateway';

export const SAVE_SHEDULE = 'SHEDULE/SAVE_SHEDULE';

const saveShedule = (shedule) => {
  return {
    type: SAVE_SHEDULE,
    payload: {
      shedule,
    },
  };
};

const getSheduleAction = () => {
  return function (dispatch) {
    getFlights('11-01-2022').then((result) => dispatch(saveShedule(result)));
  };
};
