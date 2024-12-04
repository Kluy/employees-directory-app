import React from 'react';
import { connect } from 'react-redux';
import { employeesSelector } from '../../redux/selectors/shedule.selectors';
import Error from '../Error';
import Skeleton from '../Skeleton';
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
    .sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());

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
      {employees.length > 0 ? (
        filteredList.length > 0 ? (
          <ul>{mapList(sortOption == 1 ? birthDateList(filteredList) : filteredList)}</ul>
        ) : (
          <Error
            error={{
              textMain: "We didn't find anyone",
              text: 'Try to adjust your request',
              img: './images/none.png',
            }}
          />
        )
      ) : (
        <ul>
          {new Array(Math.ceil((window.innerHeight - 155) / 84)).fill(0).map((_, i) => (
            <Skeleton key={i} />
          ))}
        </ul>
      )}
    </section>
  );
};

const employeesState = state => {
  return {
    employees: employeesSelector(state),
  };
};

export default connect(employeesState, null)(EmployeesList);
