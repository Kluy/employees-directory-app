import React from 'react';
import Button from '../button/Button';
import Card from '../card/Card';
import Heading from '../heading/Heading';
import Preloader from '../preloader/Preloader';
import { getUsersAction } from '../../store/actions/shedule.actions';
import { useEffect } from 'react';
import {
  countSelector,
  nameSelector,
  pageSelector,
  totalPagesSelector,
  workersSelector,
} from '../../store/selectors/shedule.selectors';
import { connect } from 'react-redux';

import './get.scss';
import { getWorkers } from '../../gateway/gateway';
import { useState } from 'react';

const Get = () => {
  const [workers, setWorkers] = useState([]);

  console.log('workers');
  console.log(workers);
  // console.log(getWorkers());

  // setWorkers();

  // useEffect(() => {}, []);

  return (
    <section className="get">
      {/* <div>{workers}</div> */}
      <div>{name}</div>
      <div>sdfsdfdsf</div>

      {/* <Heading text="Working with GET request" />
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
      )} */}
    </section>
  );
};

// const usersDispatch = {
//   getUsers: getUsersAction,
// };

// const usersState = state => {
//   console.log('state2');
//   console.log(state);
//   return {
//     workers: workersSelector(state),
// users: usersSelector(state),
// page: pageSelector(state),
// totalPages: totalPagesSelector(state),
// count: countSelector(state),
// };
// };

// export default connect(usersState, usersDispatch)(Get);
export default Get;
