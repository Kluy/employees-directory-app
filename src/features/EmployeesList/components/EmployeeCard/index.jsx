import React from 'react';
import moment from 'moment/moment';
import './index.scss';

const EmployeeCard = ({ sortOption, name, position, birthDate, avatar, tag }) => {
  return (
    <li className="employee">
      <div className="employee_data">
        <img className="employee_avatar" src={avatar || '/images/duck.png'} alt="avatar" />
        <div>
          <div className="employee_name">
            {name}
            <span className="employee_tag"> {tag}</span>
          </div>
          <div className="employee_position">{position}</div>
        </div>
      </div>
      {sortOption == 1 && (
        <div className="employee_birthdate">{moment(birthDate).format('DD MMM')}</div>
      )}
    </li>
  );
};
export default EmployeeCard;
