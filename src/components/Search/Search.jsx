import React from 'react';
import { connect } from 'react-redux';
import * as sheduleActions from '../shedule/shedule.actions';
import { sheduleSelector } from '../shedule/shedule.selectors';

import './search.scss';

const Search = ({ getShedule, shedule }) => {
  return (
    <section className="search">
      <div className="search__title">ПОШУК РЕЙСУ</div>
      <i className="fa-solid fa-magnifying-glass search__icon"></i>
      <input
        className="search__input"
        type="text"
        placeholder="Номер рейсу або місто"
      />
      <button onClick={getShedule} className="search__button">
        ЗНАЙТИ
      </button>
    </section>
  );
};

const mapState = (state) => {
  return {
    shedule: sheduleSelector(state),
  };
};

const mapDispatch = {
  getShedule: sheduleActions.getSheduleAction,
};

export default connect(mapState, mapDispatch)(Search);
