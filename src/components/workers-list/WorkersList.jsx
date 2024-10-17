import React from 'react';
import Worker from '../worker/Worker';
import { Link } from 'react-router-dom';

const WorkersList = ({ sortId, list }) => {
  return (
    <ul>
      {list
        .sort((a, b) =>
          sortId === 'birthday'
            ? new Date(a.birthDate).getMonth() === new Date(b.birthDate).getMonth()
              ? new Date(a.birthDate).getDate() < new Date(b.birthDate).getDate()
              : new Date(a.birthDate).getMonth() > new Date(b.birthDate).getMonth()
            : a.name.toLowerCase() > b.name.toLowerCase(),
        )
        .map(({ id, name, position, birthDate, phone, avatar, tag, email }) => (
          <Link to={`/profile/${id}`}>
            <Worker
              sortId={sortId}
              id={id}
              name={name}
              position={position}
              birthDate={birthDate}
              phone={phone}
              avatar={avatar}
              tag={tag}
              email={email}
            />
          </Link>
        ))}
    </ul>
  );
};

export default WorkersList;
