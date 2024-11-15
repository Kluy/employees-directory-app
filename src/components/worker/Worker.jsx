import React from 'react';
import moment from 'moment/moment';
import './worker.scss';
import classNames from 'classnames';

const Worker = ({ sortOption, name, position, birthDate, avatar, tag, profile }) => {
  return (
    <>
      <div className={classNames('worker_data', { 'worker_data--profile': profile })}>
        <img
          className={classNames('worker_avatar', { 'worker_avatar--profile': profile })}
          src={avatar || '/images/duck.png'}
          alt="avatar"
        />
        <div>
          <div className={classNames('worker_name', { 'worker_name--profile': profile })}>
            {name}
            <span className={classNames('worker_tag', { 'worker_tag--profile': profile })}>
              {' '}
              {tag}
            </span>
          </div>
          <div className={classNames('worker_position', { 'worker_position--profile': profile })}>
            {position}
          </div>
        </div>
      </div>
      {sortOption == 1 && (
        <div className="worker_birthdate">{moment(birthDate).format('DD MMM')}</div>
      )}
    </>
  );
};
export default Worker;
