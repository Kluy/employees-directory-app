// import { createSelector } from 'reselect';

export const usersSelector = state => {
  return state.data.users;
};
export const pageSelector = state => {
  return state.data.page;
};
export const totalPagesSelector = state => {
  return state.data.totalPages;
};
export const countSelector = state => {
  return state.data.count;
};
