import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import moment from 'moment/moment';

import './index.scss';

const EmployeeInfo = ({ workers }) => {
  const { id } = useParams();

  const worker = workers[id - 1];

  return (
    <section className="profile">
      <Link to="/">
        <img className="profile_esc" src="/images/back.svg" alt="back" />
      </Link>

      {worker && (
        <>
          <div className="profile_header">
            {/* <Worker
              profile={true}
              name={worker.name}
              position={worker.position}
              avatar={worker.avatar}
              tag={worker.tag}
            /> */}
            <img
              className="worker_avatar worker_avatar--profile"
              src={worker.avatar || '/images/duck.png'}
              alt="avatar"
            />
            <div>
              <div className="worker_name worker_name--profile">
                {worker.name}
                <span className="worker_tag worker_tag--profile"> {worker.tag}</span>
              </div>
              <div className="worker_position worker_position--profile">{worker.position}</div>
            </div>
          </div>
          <div className="profile_data">
            <div className="profile_data space-between">
              <div>
                <img className="profile_icons" src="/images/star.svg" alt="phone" />
                {moment(worker.birthDate).format('DD MMM YYYY')}
              </div>
              <div className="profile_age">
                {new Date().getFullYear() - new Date(worker.birthDate).getFullYear()} years
              </div>{' '}
            </div>
            <div className="profile_data">
              <img className="profile_icons" src="/images/phone.svg" alt="birthdate" />
              {worker.phone}
            </div>
          </div>
        </>
      )}
    </section>
  );
};
export default EmployeeInfo;
