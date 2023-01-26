import React from 'react';
import { connect } from 'react-redux';
import { departureToggle } from '../shedule.actions';
import { departureStatusSelector, flightsSelector } from '../shedule.selectors';
import './buttons.scss';

const Buttons = ({ departure, toggle }) => {
  return (
    <div className="shedule">
      <div className="filter">
        <button
          onClick={toggle}
          className={`filter__btn filter__btn_departure ${
            departure ? '' : 'filter__btn_unactive'
          }`}
        >
          <i className="fa-solid fa-plane-departure"></i>
          ВИЛІТ
        </button>
        <button
          onClick={toggle}
          className={`filter__btn filter__btn_arrival ${
            departure ? 'filter__btn_unactive' : ''
          }`}
        >
          ПРИЛІТ
        </button>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    departure: departureStatusSelector(state),
  };
};

const mapDispatch = {
  toggle: departureToggle,
};

export default connect(mapState, mapDispatch)(Buttons);
