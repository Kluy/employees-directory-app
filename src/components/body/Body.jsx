import React from 'react';
import Search from '../search/Search';
import Menu from '../menu/Menu';
import Workers from '../workers/Workers';
import { useState } from 'react';
import Popup from '../popup/Popup';
import Profile from '../profile/Profile';

const Body = () => {
  const [activePosition, setActivePosition] = useState('All');

  const [input, setInput] = useState('');

  const [popupOpen, setPopupOpen] = useState(false);

  const [sortId, setSortId] = useState('a-z');

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleFilterOptions = e => {
    const newActivePosition = e.target.innerHTML;
    if (activePosition !== newActivePosition) setActivePosition(newActivePosition);
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
      <Menu onFilter={handleFilterOptions} activePosition={activePosition} />
      <Workers activePosition={activePosition} input={input} sortId={sortId} />
      <Popup
        onOpenPopup={handlePopup}
        onSortOptions={handleSortOptions}
        popupOpen={popupOpen}
        sortId={sortId}
      />
      <Profile />
    </>
  );
};

export default Body;
