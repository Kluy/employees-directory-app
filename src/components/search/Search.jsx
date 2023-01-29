import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { flightNumberAction } from '../shedule.actions';
import PropTypes from 'prop-types';
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import moment from 'moment';

import './search.scss';

const Search = ({ saveFlightNumber }) => {
  const [input, setInput] = useState('');

  const { dep } = useParams();

  const [searchParams] = useSearchParams({});
  const date = moment(new Date()).format('DD-MM-YYYY');
  const params = Object.fromEntries([...searchParams]);

  const navigate = useNavigate();

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
            pathname: `/${dep}`,
            search: `?date=${params.date || date}&search=${input}`,
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
