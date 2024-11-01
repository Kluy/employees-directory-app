import React from 'react';
import moment from 'moment/moment';
import './worker.scss';

const Worker = ({ sortId, id, name, position, birthDate, avatar, tag }) => {
  return (
    <li className="worker" data-id={id} key={id}>
      <div className="worker_data">
        <img className="worker_avatar" src={avatar || '../../images/duck.svg'} alt="avatar" />
        <div>
          <div className={'worker_name'}>
            {name}
            <span className="worker_tag"> {tag}</span>
          </div>
          <div className={'worker_position'}>{position}</div>
        </div>
      </div>
      {sortId === 'birthday' && (
        <div className="worker_birthdate">{moment(birthDate).format('DD MMM')}</div>
      )}
    </li>
  );
};
export default Worker;
