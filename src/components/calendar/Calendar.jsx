import React, { useEffect } from 'react';
import DateSelector from '../dateSelector/DateSelector';
import PropTypes from 'prop-types';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { flightNumberAction, getSheduleAction } from '../shedule.actions';
import { connect } from 'react-redux';
import moment from 'moment';

import './calendar.scss';

const Calendar = ({ getShedule, saveFlightNumber }) => {
  const { isDepature } = useParams();

  const newDate = new Date();

  const [searchParams] = useSearchParams({
    date: moment(newDate).format('DD-MM-YYYY'),
  });
  const params = Object.fromEntries([...searchParams]);
  const dateParam = params.date.split('-').reverse().join('-');

  const navigate = useNavigate();

  const search = params.search ? `&search=${params.search}` : '';

  useEffect(() => {
    getShedule(dateParam);
    saveFlightNumber(params.search);
  }, [dateParam]);

  return (
    <div className="calendar">
      <div className="calendar__date-picker">
        <input
          onChange={(e) => {
            navigate({
              pathname: `/${isDepature || 'departure'}`,
              search: `?date=${moment(e.target.value).format(
                'DD-MM-YYYY'
              )}${search}`,
            });
          }}
          value={dateParam}
          className="date-picker"
          type="date"
        />
      </div>
      <DateSelector selectDate={moment(newDate).subtract(1, 'days')} />
      <DateSelector selectDate={moment(newDate)} />
      <DateSelector selectDate={moment(newDate).add(1, 'days')} />
    </div>
  );
};

const mapDispatch = {
  getShedule: getSheduleAction,
  saveFlightNumber: flightNumberAction,
};

Calendar.propTypes = {
  getShedule: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(Calendar);
