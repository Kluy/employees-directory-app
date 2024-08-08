import React from 'react';
import './search.scss';
const Search = ({ input, sortId, onSetInput, onOpenPopup }) => {
  return (
    <section className="section">
      <h1 className="header">Поиск</h1>
      <div className="search">
        <input
          onChange={onSetInput}
          className="search_input"
          value={input}
          type="search"
          placeholder="Search by name, tag, email..."
        />
        <img
          onClick={onOpenPopup}
          className="sort-open"
          src={sortId === 'birthday' ? '../../images/sort-active.svg' : '../../images/sort.svg'}
          alt="sort list"
        />
      </div>
    </section>
  );
};

export default Search;
