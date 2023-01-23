import React from 'react';
import './shedule.scss';

const Shedule = () => {
  return (
    <section className="shedule">
      <div className="filter">
        <button className="filter__btn">ВИЛІТ</button>
        <button className="filter__btn">ПРИЛІТ</button>
      </div>
    </section>
  );
};

export default Shedule;
