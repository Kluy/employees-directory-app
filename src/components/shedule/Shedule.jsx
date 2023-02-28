import React from 'react';
import { connect } from 'react-redux';
import { departureStatusSelector, flightsSelector } from '../../store/selectors/shedule.selectors';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';
import './shedule.scss';

const Shedule = ({ shedule, departure }) => {
  if (shedule.length === 0) return <div className="no-flights">Немає рейсів</div>;
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
      {shedule.map(flight => {
        return (
          <ul key={flight.ID} className="flights__table flight">
            <li
              className={classNames('flight__terminal', {
                flight__terminal_D: flight.term === 'D',
              })}
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
                ? `Вилетів о ${moment(flight.timeDepFact).locale('uk').format('LT')}`
                : `Прибув о ${moment(flight.timeLandFact).locale('uk').format('LT')}`}
            </li>
            <li className="flight__item_airline flight__airline">
              <img
                className="flight__airline-logo"
                src={flight.airline.en.logoSmallName}
                alt="logo"
              />
              <span className="flight__airline-name">{flight.airline.ua.name}</span>
            </li>
            <li className="flight__item">{flight.codeShareData[0].codeShare}</li>
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

const mapState = state => {
  return {
    shedule: flightsSelector(state),
    departure: departureStatusSelector(state),
  };
};

Shedule.propTypes = {
  shedule: PropTypes.array,
  departure: PropTypes.bool,
};

Shedule.defaultProps = {
  departure: true,
  shedule: [],
};

export default connect(mapState, null)(Shedule);
