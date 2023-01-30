import React, { useState } from 'react';
import { connect } from 'react-redux';
import { flightNumberAction } from '../shedule.actions';
import PropTypes from 'prop-types';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import moment from 'moment';

import './search.scss';

const Search = ({ saveFlightNumber }) => {
  const { isDepature } = useParams();
  const [searchParams] = useSearchParams({});
  const params = Object.fromEntries([...searchParams]);
  const [input, setInput] = useState(params.search);
  const today = moment(new Date()).format('DD-MM-YYYY');
  const navigate = useNavigate();

  const search = input ? `&search=${input}` : '';

  return (
    <section className="search">
      <div className="search__title">ПОШУК РЕЙСУ</div>
      <i className="fa-solid fa-magnifying-glass search__icon"></i>
      <input
        className="search__input"
        type="text"
        placeholder="Номер рейсу або місто"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          saveFlightNumber(input);

          navigate({
            pathname: `/${isDepature || 'departure'}`,
            search: `?date=${params.date || today}${search}`,
          });
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

Search.propTypes = {
  saveFlightNumber: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(Search);
