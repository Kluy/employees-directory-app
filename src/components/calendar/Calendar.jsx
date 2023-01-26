import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import * as sheduleActions from '../shedule.actions';
import { sheduleSelector } from '../shedule.selectors';

import './calendar.scss';

const Calendar = () => {
  const date = new Date();
  return (
    <>
      <div className="calendar">
        <div className="calendar__date-picker">
          {/* <div>{moment(date).format('DD/MM')}</div> */}
          <input className="date-picker" type="date" />
        </div>
        <div className="calendar__item">
          <div>{moment(date).subtract(1, 'days').format('DD/MM')}</div>
          <span className="calendar__item-text">ВЧОРА</span>
        </div>
        <div className="calendar__item">
          <div>{moment(date).format('DD/MM')}</div>
          <span className="calendar__item-text">СЬОГОДНІ</span>
        </div>
        <div className="calendar__item">
          <div>{moment(date).add(1, 'days').format('DD/MM')}</div>
          <span className="calendar__item-text">ЗАВТРА</span>
        </div>
      </div>
      <ul></ul>
    </>
  );
};

const mapState = (state) => {
  return {
    shedule: sheduleSelector,
  };
};

const mapDispatch = {
  getShedule: sheduleActions.getSheduleAction,
};

export default connect(mapState, mapDispatch)(Calendar);
