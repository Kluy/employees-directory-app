import React from 'react';
import Buttons from '../buttons/Buttons';
import Calendar from '../calendar/Calendar';
import Flights from '../flights/Flights';

import './shedule.scss';

const Shedule = () => {
  return (
    <section className="shedule">
      <Buttons />
      <Calendar />
      <Flights />
    </section>
  );
};

export default Shedule;
