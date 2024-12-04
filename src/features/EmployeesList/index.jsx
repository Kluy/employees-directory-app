import React from 'react';
import Error from '../Error';
import EmployeeCard from './components/EmployeeCard';
import { birthDateList, searchEmployees } from './utils';

const EmployeesList = ({ input, employees, sortOption, activePosition }) => {
  const filteredList = employees
    .filter(
      ({ name, position, email, tag }) =>
        (activePosition === 'All' || searchEmployees(activePosition, position)) &&
        (searchEmployees(name, input) ||
          searchEmployees(email, input) ||
          searchEmployees(tag, input)),
    )
    .sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      else return 0;
    });

  const mapList = list =>
    list.map((employee, i) => (
      <EmployeeCard
        key={employee.id}
        sortOption={sortOption}
        employee={employee}
        employees={filteredList}
        i={i}
      />
    ));

  return (
    <section className="section">
      {filteredList.length > 0 ? (
        <ul>{mapList(sortOption == 1 ? birthDateList(filteredList) : filteredList)}</ul>
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
