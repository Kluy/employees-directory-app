import React from 'react';
import Button from '../button/Button';
import Card from '../card/Card';
import Heading from '../heading/Heading';
import Preloader from '../preloader/Preloader';
import { getUsers } from '../../gateway/gateway';
import { useEffect } from 'react';
import { useState } from 'react';

import './get.scss';

const Get = ({ usersData, setPage }) => {
  console.log(usersData);
  // console.log('page');
  // console.log(page);

  // console.log(users);

  // const [usersData, setUsersData] = useState({
  //   users: [],
  //   page: 1,
  //   totalPages: null,
  // });

  // const renderUsers = page => {
  //   getUsers(page).then(data => {
  //     setPageApp(data.page + 1);
  //     // setUsersData({ users: data.users, page: data.page + 1, totalPages: data.total_pages });
  //     setUsersData({ users: data.users, totalPages: data.total_pages });
  //     console.log(data);
  //   });
  // };

  // useEffect(() => {
  //   renderUsers(pageApp);
  // }, []);
  console.log(usersData.page);
  console.log(usersData.totalPages);

  return (
    <section className="get">
      <Heading text="Working with GET request" />
      {usersData.users.length === 0 ? (
        <Preloader />
      ) : (
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
      )}
      <Button
        hidden={usersData.page === usersData.totalPages}
        className="button_show-more"
        text="Show more"
        onClick={() => setPage(usersData.page + 1)}
      />
    </section>
  );
};
export default Get;
