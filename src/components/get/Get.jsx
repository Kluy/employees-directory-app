import React from 'react';
import Button from '../button/Button';
import Card from '../card/Card';
import Heading from '../heading/Heading';
import Preloader from '../preloader/Preloader';
import { getUsersAction } from '../../store/actions/shedule.actions';
import { useEffect } from 'react';
import {
  countSelector,
  pageSelector,
  totalPagesSelector,
  usersSelector,
} from '../../store/selectors/shedule.selectors';
import { connect } from 'react-redux';

import './get.scss';

const Get = ({ getUsers, users, page, count, totalPages }) => {
  useEffect(() => {
    getUsers(count);
  }, []);

  return (
    <section className="get">
      <Heading text="Working with GET request" />
      {users.length === 0 ? (
        <Preloader />
      ) : (
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
      )}
      <Button
        hidden={page === totalPages}
        className="button--show-more"
        text="Show more"
        onClick={() => getUsers(count + 6)}
      />
    </section>
  );
};

const usersDispatch = {
  getUsers: getUsersAction,
};

const usersState = state => {
  return {
    users: usersSelector(state),
    page: pageSelector(state),
    totalPages: totalPagesSelector(state),
    count: countSelector(state),
  };
};

export default connect(usersState, usersDispatch)(Get);
