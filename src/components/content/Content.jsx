import React from 'react';
import Search from '../search/Search';
import Buttons from '../buttons/Buttons';
import Calendar from '../calendar/Calendar';
import Shedule from '../shedule/Shedule';

import './content.scss';

const Content = () => {
  return (
    <div className="wrapper">
      <Search />
      <Buttons />
      <Calendar />
      <Shedule />
    </div>
  );
};

export default Content;
