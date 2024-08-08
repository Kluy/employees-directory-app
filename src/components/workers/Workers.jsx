import React from 'react';
import { useState, useEffect } from 'react';
import { getWorkers } from '../../gateway/gateway';
import Preloader from '../preloader/Preloader';
import moment from 'moment/moment';
import './workers.scss';

const Workers = ({ activeItem, input, sortId }) => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    getWorkers().then(data => setWorkers(data));
  }, []);

  return (
    <section className="section">
      {workers.length > 0 ? (
        <ul className="workers">
          {workers
            .filter(
              ({ name, position, email }) =>
                (activeItem === 'All' ||
                  activeItem.toLowerCase().includes(position.toLowerCase())) &&
                (name.toLowerCase().includes(input.toLowerCase()) ||
                  email.toLowerCase().includes(input.toLowerCase())),
            )
            .sort((a, b) =>
              sortId === 'birthday'
                ? new Date(a.birthDate).getMonth() === new Date(b.birthDate).getMonth()
                  ? new Date(a.birthDate).getDate() > new Date(b.birthDate).getDate()
                  : new Date(a.birthDate).getMonth() > new Date(b.birthDate).getMonth()
                : a.name.toLowerCase() > b.name.toLowerCase(),
            )
            .map(({ id, name, position, birthDate, phone, avatar, tag, email }) => {
              return (
                <li className="worker" key={id}>
                  <div className="worker_data">
                    <img
                      className="worker_avatar"
                      src={avatar || '../../images/icon.png'}
                      alt="avatar"
                    />
                    <div>
                      <span className="worker_name">{name}</span>
                      <span className="worker_tag"> {tag}</span>
                      <div className="worker_position">{position}</div>
                    </div>
                  </div>
                  {sortId === 'birthday' && (
                    <div className="worker_birthdate">{moment(birthDate).format('DD MMM')}</div>
                  )}
                </li>
              );
            })}
        </ul>
      ) : (
        <Preloader />
      )}
    </section>
  );
};

export default Workers;
