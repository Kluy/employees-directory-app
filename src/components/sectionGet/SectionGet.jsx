import React from 'react';
import Button from '../button/Button';
import Card from '../card/Card';
import Heading from '../heading/Heading';
import { getUsers } from '../../gateway/gateway';

import { useEffect } from 'react';
import { useState } from 'react';

import './sectionGet.scss';

const SectionGet = () => {
  const [users, setUsers] = useState();

  const getUser = () => {
    getUsers().then(users => {
      console.log(users);
      const us = users.map(elem => {
        return (
          <Card
            key={elem.id}
            photo={elem.photo}
            name={elem.name}
            position={elem.position}
            email={elem.email}
            phone={elem.phone}
          />
        );
      });
      setUsers(us);
      console.log(us);
    });
  };
  useEffect(() => {
    getUser();
  }, []);

  console.log(users);

  return (
    <section className="get">
      <div className="heading">
        <Heading text="Working with GET request" />
      </div>
      <div className="users-list">
        <ul>{users}</ul>
      </div>
      <Button text="Show more" onClick={getUsers} />
    </section>
  );
};
export default SectionGet;
