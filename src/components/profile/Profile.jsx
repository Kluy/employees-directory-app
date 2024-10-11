import React from 'react';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';

import './profile.scss';

// const Profile = ({ worker, id, name, position, phone, birthDate, avatar, tag ) => {
const Profile = ({ worker }) => {
  return (
    worker && (
      <section className="profile">
        <Link to="/">
          <img className="back-arrow" src="../../images/arrow.svg" alt="back" />
        </Link>
        <div className="profile_header">
          <div>
            <img
              className="worker_avatar worker_avatar--big"
              src={worker.avatar || '../../images/icon.png'}
              alt="avatar"
            />
          </div>
          <div className="worker_name worker_name--big">
            {worker.name}
            <span className="worker_tag worker_tag--big"> {worker.tag}</span>
          </div>
          <div className="worker_position">{worker.position}</div>
        </div>
        <div className="profile_data">
          <div className="profile_text space-between">
            <div>
              <img className="profile_icons" src="images/star.svg" alt="phone" />
              {moment(worker.birthDate).format('DD MMM')}
            </div>
            <div className="age">
              {new Date().getFullYear() - new Date(worker.birthDate).getFullYear()} года
            </div>{' '}
          </div>
          <div className="profile_text">
            <img className="profile_icons" src="images/phone.svg" alt="phone" />
            {worker.phone}
          </div>
        </div>
      </section>
    )
  );
};
export default Profile;
