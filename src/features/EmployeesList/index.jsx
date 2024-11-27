import React from 'react';
import Error from '../Error';
import Delimiter from './components/Delimiter';
import EmployeeCard from './components/EmployeeCard';
import { sortByBirthDate, searchEmployees, year } from './utils';

const EmployeesList = ({ input, employees, sortOption, activePosition }) => {
  const filteredList = employees
    .filter(
      ({ name, position, email, tag }) =>
        (activePosition === 'All' || searchEmployees(activePosition, position)) &&
        (searchEmployees(name, input) ||
          searchEmployees(email, input) ||
          searchEmployees(tag, input)),
    )
    .sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());

  const mapList = list =>
    list.map(employee => (
      <EmployeeCard key={employee.id} sortOption={sortOption} employee={employee} />
    ));

  const employeesList = (list, sortOption) => {
    if (sortOption == 1) {
      const sortedList = sortByBirthDate(list);
      const renderList = [];

      list.reduce((acc, elem) => {
        if (year(acc.birthDate) !== year(elem.birthDate)) {
          renderList.push(<Delimiter date={acc.birthDate} />);
          renderList.push(
            mapList(sortedList.filter(({ birthDate }) => year(acc.birthDate) === year(birthDate))),
          );
        }
        return elem;
      });

      return renderList;
    }
    return mapList(list);
  };

  return (
    <section className="section">
      {filteredList.length > 0 ? (
        // <ul></ul>
        <ul>{employeesList(filteredList, sortOption)}</ul>
      ) : (
        <Error
          error={{
            textMain: "We didn't find anyone",
            text: 'Try to adjust your request',
            img: './images/none.png',
          }}
        />
      )}
    </section>
  );
};

export default EmployeesList;
