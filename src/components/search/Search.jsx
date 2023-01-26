import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as sheduleActions from '../shedule.actions';
import { sheduleSelector } from '../shedule.selectors';

import './search.scss';

const Search = ({ getShedule, shedule }) => {
  const [input, setInput] = useState('');

  return (
    <section className="search">
      <div className="search__title">ПОШУК РЕЙСУ</div>
      <i className="fa-solid fa-magnifying-glass search__icon"></i>
      <input
        className="search__input"
        type="text"
        placeholder="Номер рейсу або місто"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => getShedule(input)} className="search__button">
        ЗНАЙТИ
      </button>
    </section>
  );
};

const mapDispatch = {
  getShedule: sheduleActions.getSheduleAction,
};

export default connect(null, mapDispatch)(Search);
