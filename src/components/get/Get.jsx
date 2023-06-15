import React from 'react';
import Button from '../button/Button';
import Card from '../card/Card';
import Heading from '../heading/Heading';
import Preloader from '../preloader/Preloader';
import { getUsers } from '../../gateway/gateway';
import { useEffect } from 'react';
import { useState } from 'react';

import './get.scss';

const Get = ({ registered }) => {
  const [data, setData] = useState({
    users: [],
    page: 1,
    count: 6,
    totalPages: null,
  });
  console.log(data);

  const renderUsers = count => {
    getUsers(count).then(data => {
      setData({
        users: data.users,
        count: count,
        page: data.page,
        totalPages: data.total_pages,
      });
    });
  };

  useEffect(() => {
    renderUsers(6);
  }, [registered]);

  return (
    <section className="get">
      <Heading text="Working with GET request" />
      {data.users.length === 0 ? (
        <Preloader />
      ) : (
        <ul className="cards">
          {data.users.map(elem => (
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
        hidden={data.page === data.totalPages}
        className="button--show-more"
        text="Show more"
        onClick={() => renderUsers(data.count + 6)}
      />
    </section>
  );
};
export default Get;
