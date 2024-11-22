import React from 'react';
import { Link } from 'react-router-dom';
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
    list.map(({ id, name, position, birthDate, phone, avatar, tag }) => (
      <Link to={`/profile/${id}`}>
        <EmployeeCard
          key={id}
          sortOption={sortOption}
          name={name}
          position={position}
          birthDate={birthDate}
          phone={phone}
          avatar={avatar}
          tag={tag}
        />
      </Link>
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
        <ul>{employeesList(filteredList, sortOption)}</ul>
      ) : (
        <Error
          textMain="We didn't find anyone"
          text="Try to adjust your request"
          img="./images/none.png"
        />
      )}
    </section>
  );
};

export default EmployeesList;
