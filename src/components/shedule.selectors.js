import { createSelector } from 'reselect';

export const sheduleSelector = (state) => {
  return state.shedule.body;
};

export const departureStatusSelector = (state) => {
  return state.departure;
};

export const flightsSelector = createSelector(
  [sheduleSelector, departureStatusSelector],
  (shedule, isDepature) => {
    return isDepature ? shedule.departure : shedule.arrival;
  }
);
