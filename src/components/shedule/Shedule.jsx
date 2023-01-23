import React, { useState } from 'react';
import './shedule.scss';

const Shedule = () => {
  const [active, setActive] = useState(true);

  return (
    <section className="shedule">
      <div className="filter">
        <button
          onClick={() => setActive(!active)}
          className="filter__btn filter__btn_arrival"
        >
          <i class="fa-solid fa-plane-departure"></i>
          ВИЛІТ
        </button>
        <button
          onClick={() => setActive(!active)}
          className="filter__btn filter__btn_departure"
        >
          ПРИЛІТ
        </button>
      </div>
    </section>
  );
};

export default Shedule;
