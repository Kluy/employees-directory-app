import React from 'react';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import Delimiter from '../Delimiter';

import './index.scss';

const EmployeeCard = ({
  sortOption,
  employee: { id, name, position, birthDate, avatar, tag },
  employees,
  i,
}) => {
  const delimiterActive = () => {
    const prevBirthDate = i > 0 && employees[i - 1].birthDate;
    return (
      (!prevBirthDate ||
        moment(birthDate).format('YYYY') !== moment(prevBirthDate).format('YYYY')) && (
        <Delimiter date={birthDate} />
      )
    );
  };

  return (
    <li>
      {sortOption == 1 && delimiterActive()}
      <Link to={`/profile/${id}`}>
        <div className="employee">
          <div className="employee__data">
            <img className="employee__avatar" src={avatar || '/images/duck.png'} alt="avatar" />
            <div>
              <div className="employee__name">
                {name}
                <span className="employee__tag"> {tag}</span>
              </div>
              <div className="employee__position">{position}</div>
            </div>
          </div>
          {sortOption == 1 && (
            <div className="employee__birthdate">{moment(birthDate).format('DD MMM')}</div>
          )}
        </div>
      </Link>
    </li>
  );
};
export default EmployeeCard;
