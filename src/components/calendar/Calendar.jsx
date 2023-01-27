import React, { useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getSheduleAction } from '../shedule.actions';
import PropTypes from 'prop-types';

import './calendar.scss';

const Calendar = ({ getShedule }) => {
  const currentDate = new Date();
  const dateFormat = 'YYYY-MM-DD';
  const today = moment(currentDate).format(dateFormat);
  const yesterday = moment(currentDate).subtract(1, 'days').format(dateFormat);
  const tommorow = moment(currentDate).add(1, 'days').format(dateFormat);
  const calendarFormat = 'DD/MM';

  const [date, setDate] = useState(today);

  const calendarItemClass = classNames('calendar__item', {
    calendar__item_selected: date === yesterday,
  });

  return (
    <div className="calendar">
      <div className="calendar__date-picker">
        <input
          onSubmit={getShedule(date)}
          onChange={(e) => setDate(e.target.value)}
          value={date}
          className="date-picker"
          type="date"
        />
      </div>
      {/* <div
        className={classNames('calendar__dates', {
          calendar__dates_t: date === today,
          calendar__dates_tom: date === tommorow,
        })}
      > */}
      <div
        className={classNames('calendar__item', {
          calendar__item_selected: date === yesterday,
        })}
        onClick={() => {
          setDate(yesterday);
          getShedule(yesterday);
        }}
      >
        <div>{moment(yesterday).format(calendarFormat)}</div>
        <span className="calendar__item-text">ВЧОРА</span>
      </div>
      <div
        className={classNames('calendar__item', {
          calendar__item_selected: date === today,
        })}
        onClick={() => {
          setDate(today);
          getShedule(today);
        }}
      >
        <div>{moment(today).format(calendarFormat)}</div>
        <span className="calendar__item-text">СЬОГОДНІ</span>
      </div>
      <div
        className={classNames('calendar__item', {
          calendar__item_selected: date === tommorow,
        })}
        onClick={() => {
          setDate(tommorow);
          getShedule(tommorow);
        }}
      >
        <div>{moment(tommorow).format(calendarFormat)}</div>
        <span className="calendar__item-text">ЗАВТРА</span>
      </div>
    </div>
    // </div>
  );
};

const mapDispatch = {
  getShedule: getSheduleAction,
};

Calendar.propTypes = {
  getShedule: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(Calendar);
