import React from 'react';
import { useState } from 'react';
import './search.scss';
const Search = () => {
  const [input, setInput] = useState('');

  const onSetInput = e => {
    setInput(e.target.value);
  };

  return (
    <section className="search">
      <input
        onChange={onSetInput}
        className="search_input"
        value={input}
        type="search"
        placeholder="Search by name, tag, email..."
      />
    </section>
  );
};

export default Search;
