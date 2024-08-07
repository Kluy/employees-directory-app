import React from 'react';
import Search from '../search/Search';
import Menu from '../menu/Menu';
import Workers from '../workers/Workers';
import { useState } from 'react';
import Popup from '../popup/Popup';
import Header from '../header/Header';

const Body = () => {
  const [activeItem, setActiveItem] = useState('All');

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [input, setInput] = useState('');

  const onSetInput = e => {
    setInput(e.target.value);
  };

  const filter = e => {
    const newActiveItem = e.target.innerHTML;
    if (activeItem !== newActiveItem) setActiveItem(newActiveItem);
  };

  const onOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <Header />
      <Search onOpenPopup={onOpenPopup} onSetInput={onSetInput} input={input} />
      <Menu filter={filter} activeItem={activeItem} />
      <Workers activeItem={activeItem} input={input} />
      <Popup isPopupOpen={isPopupOpen} onOpenPopup={onOpenPopup} />
    </>
  );
};

export default Body;
