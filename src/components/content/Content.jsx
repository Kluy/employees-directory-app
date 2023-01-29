import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Search from '../search/Search';
import Shedule from '../shedule/Shedule';
import './content.scss';

const Content = () => {
  return (
    <div className="content-wrapper">
      <Search />
      <Shedule />
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/:dep" element={[<Search />, <Shedule />]}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default Content;
