import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../Error';
import Delimiter from './components/Delimiter';
import EmployeeCard from './components/EmployeeCard';
import { birthDateList, birthDateList2, searchEmployees } from './utils';

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

  // console.log('a');
  // birthDateList2(filteredList).map(a => console.log(new Date(a.birthDate).getFullYear()));
  // console.log(birthDateList2(filteredList));

  const mappedList = list =>
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
      const listPart1 = mappedList(birthDateList(filteredList, true));
      listPart1.push(<Delimiter />);
      const listPart2 = mappedList(birthDateList(filteredList));
      return listPart1.concat(listPart2);
    }

    return mappedList(list);
  };

  const employeesList2 = (list, sortOption) => {
    if (sortOption == 1) {
      const listPart1 = mappedList(birthDateList2(filteredList, true));
      //  listPart1.push(<Delimiter />);
      //  const listPart2 = mappedList(birthDateList2(filteredList));
      //  return listPart1.concat(listPart2);
      return listPart1;
    }

    return mappedList(list);
  };

  return (
    <section className="section">
      {filteredList.length > 0 ? (
        <ul>{employeesList2(filteredList, sortOption)}</ul>
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
