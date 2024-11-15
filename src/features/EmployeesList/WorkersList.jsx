import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import { Link } from 'react-router-dom';

const WorkersList = ({ sortOption, list }) => {
  return (
    <ul>
      {list.map(({ id, name, position, birthDate, phone, avatar, tag }) => (
        <li className="worker" data-id={id} key={id}>
          <Link to={`/profile/${id}`}>
            <EmployeeCard
              sortOption={sortOption}
              name={name}
              position={position}
              birthDate={birthDate}
              phone={phone}
              avatar={avatar}
              tag={tag}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default WorkersList;
