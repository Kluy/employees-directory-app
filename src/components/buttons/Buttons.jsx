import React from 'react';
import { connect } from 'react-redux';
import { toggleAction } from '../shedule.actions';
import { departureStatusSelector } from '../shedule.selectors';
import { Link, useParams, useSearchParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import './buttons.scss';

const Buttons = ({ departure, toggle }) => {
  const [searchParams] = useSearchParams();

  return (
    <div className="select">
      <button
        onClick={toggle}
        className={classNames('select__btn select__btn_departure', {
          select__btn_unactive: !departure,
        })}
        disabled={departure}
      >
        <Link to={`/departure?${searchParams}`}>ВИЛІТ</Link>
        {/* ВИЛІТ */}
      </button>
      <button
        onClick={toggle}
        className={classNames('select__btn select__btn_arrival', {
          select__btn_unactive: departure,
        })}
        disabled={!departure}
      >
        <Link to={`/arrival?${searchParams}`}>ПРИЛІТ</Link>
        {/* ПРИЛІТ */}
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
