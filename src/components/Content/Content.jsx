import React from 'react';
import Calendar from '../calendar/Calendar';
import Search from '../search/search';
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
