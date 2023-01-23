import React from 'react';
import moment from 'moment';

import './calendar.scss';

const Calendar = () => {
  const date = new Date();
  return (
    <div className="calendar">
      <div>
        <div>{moment(date).format('DD/MM')}</div>
        <input type="date" />
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
  );
};

export default Calendar;
