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

const getShedule = () => {
  return function (dispatch) {
    getFlights().then((result) => dispatch(saveShedule(result)));
  };
};
