import React from 'react';
import './search.scss';
const Search = ({ input, onSetInput, onOpenPopup }) => {
  // const [input, setInput] = useState('');

  // const onSetInput = e => {
  //   setInput(e.target.value);
  // };'

  const sortWorkers = () => {};

  return (
    <section className="search">
      <input
        onChange={onSetInput}
        className="search_input"
        value={input}
        type="search"
        placeholder="Search by name, tag, email..."
      />
      <img onClick={onOpenPopup} className="filter" src="../../images/sort.svg" alt="sort list" />
    </section>
  );
};

export default Search;
