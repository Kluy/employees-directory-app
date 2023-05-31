import React from 'react';
import Button from '../button/Button';
import Card from '../card/Card';
import Heading from '../heading/Heading';
import { fetchUsers } from '../../gateway/gateway';
import { useEffect } from 'react';
import { useState } from 'react';

import './get.scss';

const Get = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const getUsers = a => {
    fetchUsers(a).then(data => {
      console.log(data.users);
      console.log(data);
      setUsers(data.users);
      setTotalPages(data.total_pages);
    });
  };

  const showNextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getUsers(page);
  }, [page]);

  return (
    <section className="get">
      <Heading text="Working with GET request" />
      <ul className="cards">
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
      <Button
        hidden={page === totalPages}
        className="button_show-more"
        text="Show more"
        onClick={showNextPage}
      />
    </section>
  );
};
export default Get;
