import React from 'react';
import { connect } from 'react-redux';
import { departureStatusSelector, flightsSelector } from '../shedule.selectors';
import PropTypes from 'prop-types';
import moment from 'moment';
import './flights.scss';

const Flights = ({ flights, departure }) => {
  if (flights.length === 0)
    return <div className="no-flights">Немає рейсів</div>;
  return (
    <div className="flights">
      <ul className="flights__table flights__table-heading">
        <li className="flight__item">Термінал</li>
        <li className="flight__item">Розклад</li>
        <li className="flight__item flight__item_status">Напрямок</li>
        <li className="flight__item_status">Статус</li>
        <li className="flight__item_airline">Авіакомпанія</li>
        <li className="flight__item">Рейс</li>
        <li className="flight__item flight__item_status"></li>
      </ul>
      {flights.map((flight) => {
        return (
          <ul key={flight.ID} className="flights__table flight">
            <li
              className={`flight__terminal ${
                flight.term === 'D' ? 'flight__terminal_D' : ''
              }`}
            >
              {flight.term}
            </li>
            <li className="flight__item ">
              {departure
                ? moment(flight.timeDepShedule).locale('uk').format('LT')
                : moment(flight.timeArrShedule).locale('uk').format('LT')}
            </li>
            <li className="flight__item flight__item_status">
              {flight['airportToID.city'] || flight['airportFromID.city']}
            </li>
            <li className="flight__item_status">
              {departure
                ? `Вилетів о ${moment(flight.timeDepFact)
                    .locale('uk')
                    .format('LT')}`
                : `Прибув о ${moment(flight.timeLandFact)
                    .locale('uk')
                    .format('LT')}`}
            </li>
            <li className="flight__item_airline flight__airline">
              <img
                className="flight__airline-logo"
                src={flight.airline.en.logoSmallName}
                alt="logo"
              />
              <span className="flight__airline-name">
                {flight.airline.ua.name}
              </span>
            </li>
            <li className="flight__item">
              {flight.codeShareData[0].codeShare}
            </li>
            <li className="flight__item flight__item_status">
              <a className="flight__item_details" href="#">
                Деталі рейсу
              </a>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

const mapState = (state) => {
  return {
    flights: flightsSelector(state),
    departure: departureStatusSelector(state),
  };
};

Flights.propTypes = {
  flights: PropTypes.array,
  departure: PropTypes.bool,
};

Flights.defaultProps = {
  departure: true,
  flights: [],
};

export default connect(mapState, null)(Flights);
