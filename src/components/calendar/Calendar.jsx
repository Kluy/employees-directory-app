import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getSheduleAction } from '../shedule.actions';
import PropTypes from 'prop-types';

import './calendar.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Calendar = ({ getShedule }) => {
  const currentDate = new Date();
  const dateSearchFormat = 'DD-MM-YYYY';
  const dateFormat = 'YYYY-MM-DD';
  const renderFormat = 'DD/MM';
  const today = moment(currentDate);
  const yesterday = moment(currentDate).subtract(1, 'days');
  const tommorow = moment(currentDate).add(1, 'days');

  const [searchParams] = useSearchParams({
    date: moment(today).format('YYYY-MM-DD'),
  });
  const params = Object.fromEntries([...searchParams]);
  const navigate = useNavigate();

  const [date, setDate] = useState(params.date);
  console.log('date');
  console.log(date);

  return (
    <div className="calendar">
      <div className="calendar__date-picker">
        <input
          onChange={(e) => {
            setDate(e.target.value);
            getShedule(e.target.value);
            navigate({
              search: `?date=${moment(e.target.value).format(
                dateSearchFormat
              )}&search=${params.search}`,
            });
          }}
          value={date}
          className="date-picker"
          type="date"
        />
      </div>
      <div
        className={classNames('calendar__item', {
          calendar__item_selected: date === yesterday.format(dateFormat),
        })}
        onClick={() => {
          setDate(yesterday.format(dateFormat));
          getShedule(yesterday);
          navigate({
            search: `?date=${yesterday.format(dateSearchFormat)}&search=${
              params.search
            }`,
          });
        }}
      >
        <div>{yesterday.format(renderFormat)}</div>
        <span className="calendar__item-text">ВЧОРА</span>
      </div>
      <div
        className={classNames('calendar__item', {
          calendar__item_selected: date === today.format(dateFormat),
        })}
        onClick={() => {
          setDate(today.format(dateFormat));
          navigate({
            search: `?date=${today.format(dateSearchFormat)}&search=${
              params.search
            }`,
          });
          getShedule(today);
        }}
      >
        <div>{today.format(renderFormat)}</div>
        <span className="calendar__item-text">СЬОГОДНІ</span>
      </div>
      <div
        className={classNames('calendar__item', {
          calendar__item_selected: date === tommorow.format(dateFormat),
        })}
        onClick={() => {
          setDate(tommorow.format(dateFormat));
          navigate({
            search: `?date=${tommorow.format(dateSearchFormat)}&search=${
              params.search
            }`,
          });
          getShedule(tommorow);
        }}
      >
        <div>{tommorow.format(renderFormat)}</div>
        <span className="calendar__item-text">ЗАВТРА</span>
      </div>
    </div>
  );
};

const mapDispatch = {
  getShedule: getSheduleAction,
};

Calendar.propTypes = {
  getShedule: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(Calendar);
