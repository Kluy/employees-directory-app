import React from 'react';
import { connect } from 'react-redux';
import { toggleAction } from '../shedule.actions';
import { departureStatusSelector } from '../shedule.selectors';
import { Link, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './buttons.scss';

const Buttons = ({ departure, toggle }) => {
  const [searchParams] = useSearchParams();

  return (
    <div className="select">
      <Link to={`/departure?${searchParams}`}>
        <button
          onClick={toggle}
          className={classNames('select__btn select__btn_departure', {
            select__btn_unactive: !departure,
          })}
          disabled={departure}
        >
          ВИЛІТ
        </button>
      </Link>
      <Link to={`/arrival?${searchParams}`}>
        <button
          onClick={toggle}
          className={classNames('select__btn select__btn_arrival', {
            select__btn_unactive: departure,
          })}
          disabled={!departure}
        >
          ПРИЛІТ
        </button>
      </Link>
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
