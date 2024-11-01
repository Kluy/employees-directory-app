import React from 'react';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import './profile.scss';

const Profile = ({ workers }) => {
  const { id } = useParams();

  const worker = workers[id - 1];

  return (
    <section className="profile">
      <Link to="/">
        <img className="back-arrow" src="../images/arrow.svg" alt="back" />
      </Link>
      {worker && (
        <>
          <div className="profile_header">
            <div>
              <img
                className="worker_avatar worker_avatar--big"
                src={worker.avatar || '../images/duck.svg'}
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
            <div className="profile_data profile_text-line space-between">
              <div>
                <img className="profile_icons" src="../images/star.svg" alt="phone" />
                {moment(worker.birthDate).format('DD MMM YYYY')}
              </div>
              <div className="profile_age">
                {new Date().getFullYear() - new Date(worker.birthDate).getFullYear()} years
              </div>{' '}
            </div>
            <div className="profile_data profile_text-line">
              <img className="profile_icons" src="../images/phone.svg" alt="birthdate" />
              {worker.phone}
            </div>
          </div>
        </>
      )}
    </section>
  );
};
export default Profile;
