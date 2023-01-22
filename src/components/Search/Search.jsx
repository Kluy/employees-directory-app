import React from 'react';
import './search.scss';

const Search = () => {
  return (
    <section className="search">
      <div className="search__title">ПОШУК РЕЙСУ</div>
      <input
        className="search__input"
        type="text"
        placeholder="Номер рейсу або місто"
      />
      <button className="search__button">ЗНАЙТИ</button>
    </section>
  );
};

export default Search;
