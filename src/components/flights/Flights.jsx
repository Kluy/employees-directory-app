import React from 'react';
import { connect } from 'react-redux';
import { sheduleSelector } from '../shedule.selectors';
import moment from 'moment';
import './flights.scss';

const Flights = ({ shedule }) => {
  return (
    <div className="flights">
      <ul className="flights__table flights__table_names">
        <li>Термінал</li>
        <li>Розклад</li>
        <li>Напрямок</li>
        <li>Статус</li>
        <li>Авіакомпанія</li>
        <li>Рейс</li>
        <li></li>
      </ul>

      {shedule &&
        shedule.body.departure.map((flight) => {
          console.log(flight);
          //   console.log(flight.airportToID.name);
          return (
            <ul className="flights__table">
              <li>{flight.term}</li>
              <li>{moment(flight.timeDepShedule).format('h:mm')}</li>
              <li>{flight['airportToID.City']}</li>
              <li>Вилетів о {moment(flight.timeDepFact).format('h:mm')}</li>
              <li className="airline">
                <img
                  className="airline_logo"
                  src={flight.airline.en.logoSmallName}
                  alt="logo"
                />
                <span> {flight.airline.ua.name}</span>
              </li>
              <li>{flight.codeShareData[0].codeShare}</li>
              <li></li>
            </ul>
          );
        })}
    </div>
  );
};

const mapState = (state) => {
  return {
    shedule: sheduleSelector(state),
  };
};

// const mapDispatch = {
//   getShedule: sheduleActions.getSheduleAction,
// };

export default connect(mapState, null)(Flights);
