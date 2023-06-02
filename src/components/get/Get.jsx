import React from 'react';
import Button from '../button/Button';
import Card from '../card/Card';
import Heading from '../heading/Heading';
import { fetchUsers } from '../../gateway/gateway';
import { useEffect } from 'react';
import { useState } from 'react';

import './get.scss';

const Get = ({ reset }) => {
  const [usersData, setUsersData] = useState({
    users: [],
    page: 1,
    totalPages: null,
  });

  // if (reset) {
  //   setUsersData({ ...usersData, page: 1 });
  // }
  console.log('props');
  // console.log(props);
  console.log(usersData.page);

  const getUsers = page => {
    fetchUsers(page).then(data => {
      setUsersData({ users: data.users, page: data.page + 1, totalPages: data.total_pages });
      console.log(data);
    });
  };

  useEffect(() => {
    getUsers(usersData.page);
  }, []);

  return (
    <section className="get">
      <Heading text="Working with GET request" />
      <ul className="cards">
        {usersData.users.map(elem => (
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
      <Button
        hidden={usersData.page === usersData.totalPages + 1}
        className="button_show-more"
        text="Show more"
        onClick={() => getUsers(usersData.page)}
      />
    </section>
  );
};
export default Get;
