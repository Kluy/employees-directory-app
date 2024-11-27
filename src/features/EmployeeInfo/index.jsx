import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Error from '../Error';
import moment from 'moment/moment';

import './index.scss';

const EmployeeInfo = ({ employees }) => {
  const { id } = useParams();

  const employee = employees.find(elem => elem.id === id);

  return (
    <section className="profile">
      <Link to="/">
        <img className="profile__esc" src="/images/back.svg" alt="back" />
      </Link>

      {employee ? (
        <>
          <div className="profile__header">
            <img
              className="employee__avatar employee__avatar_profile"
              src={employee.avatar || '/images/duck.png'}
              alt="avatar"
            />
            <div>
              <div className="employee__name employee__name_profile">
                {employee.name}
                <span className="employee__tag employee__tag_profile"> {employee.tag}</span>
              </div>
              <div className="employee__position employee__position_profile">
                {employee.position}
              </div>
            </div>
          </div>
          <div className="profile__data">
            <div className="profile__data space-between">
              <div>
                <img className="profile__icons" src="/images/star.svg" alt="phone" />
                {moment(employee.birthDate).format('DD MMM YYYY')}
              </div>
              <div className="profile__age">
                {new Date().getFullYear() - new Date(employee.birthDate).getFullYear()} years
              </div>
            </div>
            <div className="profile__data">
              <img className="profile__icons" src="/images/phone.svg" alt="birthdate" />
              {employee.phone}
            </div>
          </div>
        </>
      ) : (
        <Error />
      )}
    </section>
  );
};
export default EmployeeInfo;
