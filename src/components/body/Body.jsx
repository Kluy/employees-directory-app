import React from 'react';
import Search from '../search/Search';
import Menu from '../menu/Menu';
import Workers from '../workers/Workers';
import { useState } from 'react';
import Popup from '../popup/Popup';

const Body = () => {
  const [activeItem, setActiveItem] = useState('All');

  const [input, setInput] = useState('');

  const [popupOpen, setPopupOpen] = useState(false);

  const [sortId, setSortId] = useState('a-z');

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleFilterOptions = e => {
    const newActiveItem = e.target.innerHTML;
    if (activeItem !== newActiveItem) setActiveItem(newActiveItem);
  };

  const handlePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const handleSortOptions = e => {
    if (e.target.id === 'close') {
      handlePopup();
    } else if (e.target.type === 'radio') {
      setSortId(e.target.id);
    } else return;
  };

  return (
    <>
      <Search onOpenPopup={handlePopup} onSetInput={handleInput} input={input} sortId={sortId} />
      <Menu onFilter={handleFilterOptions} activeItem={activeItem} />
      <Workers activeItem={activeItem} input={input} sortId={sortId} />
      <Popup
        onOpenPopup={handlePopup}
        onSortOptions={handleSortOptions}
        popupOpen={popupOpen}
        sortId={sortId}
      />
    </>
  );
};

export default Body;
