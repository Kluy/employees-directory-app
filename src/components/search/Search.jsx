import React, { useState } from 'react';
import { connect } from 'react-redux';
import { flightNumberAction } from '../shedule.actions';
import PropTypes from 'prop-types';

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
        onClick={() => saveFlightNumber(input)}
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

Search.propTypes = {
  saveFlightNumber: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(Search);
