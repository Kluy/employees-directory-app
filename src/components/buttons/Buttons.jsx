import React from 'react';
import { connect } from 'react-redux';
import { toggleAction } from '../shedule.actions';
import { departureStatusSelector } from '../shedule.selectors';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './buttons.scss';

const Buttons = ({ departure, toggle }) => {
  return (
    <div className="select">
      <button
        onClick={toggle}
        className={classNames('select__btn select__btn_departure', {
          select__btn_unactive: !departure,
        })}
        disabled={departure}
      >
        <i className="fa-solid fa-plane-departure select__btn-icon"></i>
        ВИЛІТ
      </button>
      <button
        onClick={toggle}
        className={classNames(
          'select__btn select__btn_arrival select__btn-icon',
          {
            select__btn_unactive: departure,
          }
        )}
        disabled={!departure}
      >
        <i class="fa-solid fa-plane-arrival select__btn-icon"></i>
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
  toggle: toggleAction,
};

Buttons.propTypes = {
  toogle: PropTypes.func.isRequired,
  departure: PropTypes.bool,
};

Buttons.defaultProps = {
  departure: true,
};

export default connect(mapState, mapDispatch)(Buttons);
