import { createSelector } from 'reselect';

export const sheduleSelector = (state) => {
  return state.shedule;
};

export const departureStatusSelector = (state) => {
  return state.departure;
};

export const flightNumberSelector = (state) => {
  return state.flightNumber;
};

export const flightsSelector = createSelector(
  [sheduleSelector, departureStatusSelector, flightNumberSelector],
  (shedule, isDepature, flightNumber) => {
    const flights = isDepature ? shedule.departure : shedule.arrival;
    const flightsByNumber = flights.filter((flight) =>
      flightNumber ? flight.fltNo.includes(flightNumber) : flight
    );
    return flightsByNumber;
  }
);
