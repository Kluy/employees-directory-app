import React, { useState } from 'react';
import Calendar from '../calendar/Calendar';
import './shedule.scss';

const Shedule = () => {
  const [active, setActive] = useState(false);

  return (
    <section className="shedule">
      <div className="filter">
        <button
          onClick={() => setActive(!active)}
          className={`filter__btn filter__btn_departure ${
            active ? 'filter__btn_unactive' : ''
          }`}
        >
          <i className="fa-solid fa-plane-departure"></i>
          ВИЛІТ
        </button>
        <button
          onClick={() => setActive(!active)}
          className={`filter__btn filter__btn_arrival ${
            active ? '' : 'filter__btn_unactive'
          }`}
        >
          ПРИЛІТ
        </button>
      </div>
      <Calendar />
    </section>
  );
};

export default Shedule;
