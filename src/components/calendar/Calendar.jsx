import React, { useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import * as sheduleActions from '../shedule.actions';
import { sheduleSelector } from '../shedule.selectors';

import './calendar.scss';

const Calendar = ({ getShedule }) => {
  const date = new Date();
  const today = moment(date);
  const yesterday = moment(date).subtract(1, 'days');
  const tommorow = moment(date).add(1, 'days');

  const [dateInput, setDateInput] = useState(today.format('YYYY-MM-DD'));

  return (
    <div className="calendar">
      <div className="calendar__date-picker">
        <input
          onSubmit={getShedule(dateInput)}
          onChange={(e) => setDateInput(e.target.value)}
          value={dateInput}
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
