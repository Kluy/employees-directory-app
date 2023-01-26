import React from 'react';
import { connect } from 'react-redux';
import { flightsSelector } from '../shedule.selectors';
import moment from 'moment';
import './flights.scss';

const Flights = ({ flights }) => {
  if (!flights || flights.length === 0)
    return <div className="no-flights">Немає рейсів</div>;
  return (
    <div className="flights">
      <ul className="flights__table flights__table_heading">
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
          <ul className="flights__table flight">
            <li
              className={`flight__terminal ${
                flight.term === 'D' ? 'flight__terminal_D' : ''
              }`}
            >
              {flight.term}
            </li>
            <li className="flight__item ">
              {moment(flight.timeDepShedule).format('h:mm')}
            </li>
            <li className="flight__item flight__item_status">
              {flight['airportToID.city']}
            </li>
            <li className="flight__item_status">
              Вилетів о {moment(flight.timeDepFact).format('h:mm')}
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
  };
};

// const mapDispatch = {
//   getShedule: sheduleActions.getSheduleAction,
// };

export default connect(mapState, null)(Flights);
