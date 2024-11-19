import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import moment from 'moment/moment';

import './index.scss';

const EmployeeInfo = ({ employees }) => {
  const { id } = useParams();

  const employee = employees[id - 1];

  return (
    <section className="profile">
      <Link to="/">
        <img className="profile_esc" src="/images/back.svg" alt="back" />
      </Link>

      {employee && (
        <>
          <div className="profile_header">
            <img
              className="employee_avatar employee_avatar--profile"
              src={employee.avatar || '/images/duck.png'}
              alt="avatar"
            />
            <div>
              <div className="employee_name employee_name--profile">
                {employee.name}
                <span className="employee_tag employee_tag--profile"> {employee.tag}</span>
              </div>
              <div className="employee_position employee_position--profile">
                {employee.position}
              </div>
            </div>
          </div>
          <div className="profile_data">
            <div className="profile_data space-between">
              <div>
                <img className="profile_icons" src="/images/star.svg" alt="phone" />
                {moment(employee.birthDate).format('DD MMM YYYY')}
              </div>
              <div className="profile_age">
                {new Date().getFullYear() - new Date(employee.birthDate).getFullYear()} years
              </div>
            </div>
            <div className="profile_data">
              <img className="profile_icons" src="/images/phone.svg" alt="birthdate" />
              {employee.phone}
            </div>
          </div>
        </>
      )}
    </section>
  );
};
export default EmployeeInfo;
