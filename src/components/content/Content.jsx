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
    </div>
  );
};

export default Content;
