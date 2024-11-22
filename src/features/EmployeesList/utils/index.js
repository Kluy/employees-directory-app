const currentMonth = new Date().getMonth();

const month = date => new Date(date).getMonth();

const day = date => new Date(date).getDate();

export const year = date => new Date(date).getFullYear();

export const searchEmployees = (currentData, input) =>
  currentData.toLowerCase().includes(input.toLowerCase());

export const sortByBirthDate = list => list.sort((a, b) => a.birthDate > b.birthDate);
