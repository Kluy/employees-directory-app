import React from 'react';
import Worker from '../worker/Worker';
import { Link } from 'react-router-dom';

const WorkersList = ({ sortOption, list }) => {
  return (
    <ul>
      {list.map(({ id, name, position, birthDate, phone, avatar, tag }) => (
        <li className="worker" data-id={id} key={id}>
          <Link to={`/profile/${id}`}>
            <Worker
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
