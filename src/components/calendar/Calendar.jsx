import React, { useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import * as sheduleActions from '../shedule.actions';

import './calendar.scss';

const Calendar = ({ getShedule }) => {
  const currentDate = new Date();
  const today = moment(currentDate);
  const yesterday = moment(currentDate).subtract(1, 'days');
  const tommorow = moment(currentDate).add(1, 'days');

  // const [date, setDate] = useState(today.format('YYYY-MM-DD'));
  const [date, setDate] = useState('2022-02-01');

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
      <div
        onClick={() => {
          getShedule(yesterday.format('DD-MM-YYYY'));
        }}
        className="calendar__item"
      >
        <div>{yesterday.format('DD/MM')}</div>
        <span className="calendar__item-text">ВЧОРА</span>
      </div>
      <div
        onClick={() => {
          getShedule(today.format('DD-MM-YYYY'));
        }}
        className="calendar__item"
      >
        <div>{today.format('DD/MM')}</div>
        <span className="calendar__item-text">СЬОГОДНІ</span>
      </div>
      <div
        onClick={() => {
          getShedule(tommorow.format('DD-MM-YYYY'));
        }}
        className="calendar__item"
      >
        <div>{tommorow.format('DD/MM')}</div>
        <span className="calendar__item-text">ЗАВТРА</span>
      </div>
    </div>
  );
};

const mapDispatch = {
  getShedule: sheduleActions.getSheduleAction,
};

export default connect(null, mapDispatch)(Calendar);
