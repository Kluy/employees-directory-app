export const searchEmployees = (currentData, input) =>
  currentData.toLowerCase().includes(input.toLowerCase());

export const birthDateList = list => list.sort((a, b) => a.birthDate - b.birthDate);
