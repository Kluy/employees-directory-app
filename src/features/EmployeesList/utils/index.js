const currentMonth = new Date().getMonth();

const month = date => new Date(date).getMonth();

const day = date => new Date(date).getDate();

export const searchEmployees = (currentData, input) =>
  currentData.toLowerCase().includes(input.toLowerCase());

export const birthDateList = (list, greaterThan) =>
  (greaterThan
    ? list.filter(({ birthDate }) => month(birthDate) > currentMonth)
    : list.filter(({ birthDate }) => month(birthDate) < currentMonth)
  ).sort((a, b) =>
    month(a.birthDate) === month(b.birthDate)
      ? day(a.birthDate) > day(b.birthDate)
      : month(a.birthDate) > month(b.birthDate),
  );
