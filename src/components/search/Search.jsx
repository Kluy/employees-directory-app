import React, { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import moment from 'moment';

import './search.scss';

const Search = () => {
  const { isDeparture } = useParams();
  const [searchParams] = useSearchParams({
    date: moment(new Date()).format('DD-MM-YYYY'),
  });
  const params = Object.fromEntries([...searchParams]);
  const [input, setInput] = useState(params.search || '');
  const navigate = useNavigate();

  const search = input ? `&search=${input}` : '';

  return (
    <section className="search">
      <div className="search__title">ПОШУК РЕЙСУ</div>
      <form action="">
        <input
          className="search__input"
          type="text"
          placeholder="Номер рейсу або місто"
          value={input}
          onChange={e => {
            setInput(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            navigate({
              pathname: `/${isDeparture || 'departure'}`,
              search: `?date=${params.date}${search}`,
            });
          }}
          className="search__button"
        >
          ЗНАЙТИ
        </button>
      </form>
    </section>
  );
};

export default Search;
