import React, { useState } from 'react';
import { connect } from 'react-redux';
import { flightNumberAction } from '../shedule.actions';

import './search.scss';

const Search = ({ saveFlightNumber }) => {
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
      <button
        onClick={() => {
          saveFlightNumber(input);
          setInput('');
        }}
        className="search__button"
      >
        ЗНАЙТИ
      </button>
    </section>
  );
};

const mapDispatch = {
  saveFlightNumber: flightNumberAction,
};

export default connect(null, mapDispatch)(Search);
