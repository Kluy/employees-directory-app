import React from 'react';
import Search from '../search/Search';
import Menu from '../menu/Menu';
import Workers from '../workers/Workers';
import Popup from '../popup/Popup';
import Profile from '../profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getWorkers } from '../../gateway/gateway';
import { useEffect, useState } from 'react';

const Body = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    getWorkers().then(data => {
      setWorkers(data);
    });
  }, []);

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
    <BrowserRouter>
      <Routes>
        <Route path="/profile/:id" element={<Profile workers={workers} />}></Route>
        <Route
          exact
          path="/"
          element={[
            <Search
              onOpenPopup={handlePopup}
              onSetInput={handleInput}
              input={input}
              sortId={sortId}
            />,
            <Menu onFilter={handleFilterOptions} activePosition={activePosition} />,
            <Workers
              activePosition={activePosition}
              input={input}
              sortId={sortId}
              workers={workers}
            />,

            <Popup
              onOpenPopup={handlePopup}
              onSortOptions={handleSortOptions}
              popupOpen={popupOpen}
              sortId={sortId}
            />,
          ]}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
