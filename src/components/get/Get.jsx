import React from 'react';
import Button from '../button/Button';
import Card from '../card/Card';
import Heading from '../heading/Heading';
import { getUsers } from '../../gateway/gateway';
import { useEffect } from 'react';
import { useState } from 'react';

import './get.scss';

const Get = () => {
  const [users, setUsers] = useState([]);

  const getUser = () => {
    getUsers().then(users => {
      setUsers(users);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <section className="get">
      <Heading text="Working with GET request" />
      <ul className="users-list">
        {users.map(elem => (
          <Card
            key={elem.id}
            photo={elem.photo}
            name={elem.name}
            position={elem.position}
            email={elem.email}
            phone={elem.phone}
          />
        ))}
      </ul>
      <Button className="button button__show-more" text="Show more" onClick={getUser} />
    </section>
  );
};
export default Get;
