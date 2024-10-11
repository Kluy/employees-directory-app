import React from 'react';
import Card from '../card/Card';
import Profile from '../profile/Profile';
import { Link } from 'react-router-dom';

const WorkersList = ({ sortId, list }) => {
  return (
    <ul>
      {list
        .sort((a, b) =>
          sortId === 'birthday'
            ? new Date(a.birthDate).getMonth() === new Date(b.birthDate).getMonth()
              ? new Date(a.birthDate).getDate() > new Date(b.birthDate).getDate()
              : new Date(a.birthDate).getMonth() > new Date(b.birthDate).getMonth()
            : a.name.toLowerCase() > b.name.toLowerCase(),
        )
        .map(({ id, name, position, birthDate, phone, avatar, tag, email }) => (
          <Link to="/profile">
            <Card
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
