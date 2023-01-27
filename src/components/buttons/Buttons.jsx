import React from 'react';
import { connect } from 'react-redux';
import { departureToggle } from '../shedule.actions';
import { departureStatusSelector } from '../shedule.selectors';
import PropTypes from 'prop-types';
import './buttons.scss';

const Buttons = ({ departure, toggle }) => {
  return (
    <div className="select">
      <button
        onClick={toggle}
        className={`select__btn select__btn_departure ${
          departure ? '' : 'select__btn_unactive'
        }`}
      >
        <i className="fa-solid fa-plane-departure"></i>
        ВИЛІТ
      </button>
      <button
        onClick={toggle}
        className={`select__btn select__btn_arrival ${
          departure ? 'select__btn_unactive' : ''
        }`}
      >
        ПРИЛІТ
      </button>
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

Buttons.propTypes = {
  toogle: PropTypes.func.isRequired,
  departure: PropTypes.bool,
};

Buttons.defaultProps = {
  departure: true,
};

export default connect(mapState, mapDispatch)(Buttons);
