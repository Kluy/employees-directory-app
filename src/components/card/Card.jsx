import React from 'react';
import moment from 'moment/moment';

import './card.scss';

const Card = ({ sortId, id, name, position, birthDate, phone, avatar, tag, email }) => {
  return (
    <li className="worker" key={id}>
      <div className="worker_data">
        <img className="worker_avatar" src={avatar || '../../images/icon.png'} alt="avatar" />
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
};
export default Card;
