import classNames from 'classnames';
import React, { useState } from 'react';
import './popup.scss';

const Popup = ({ isPopupOpen, onOpenPopup }) => {
  const [checked, setChecked] = useState([
    { id: 'a-z', text: 'A-Z', checked: true },
    { id: 'birthday', text: 'By birthday', checked: false },
  ]);

  const sortWorkers = e => {
    if (e.target.id === 'close') {
      onOpenPopup();
    } else if (e.target.type === 'radio') {
      setChecked(
        checked.map(({ id, checked, text }) => {
          e.target.id === id ? (checked = true) : (checked = false);
          return { id, checked, text };
        }),
      );
    } else return;
  };

  return (
    <div className={classNames('popup', { visible: isPopupOpen })}>
      <form onClick={e => sortWorkers(e)} className="sort" action="">
        <fieldset className="sort_fieldset">
          <legend className="sort_legend">Sort</legend>
          {checked.map(({ id, text, checked }) => (
            <div>
              <input
                className="sort_input"
                type="radio"
                id={id}
                name="sort"
                value={id}
                checked={checked}
              />
              <label className="sort_label" for={id}>
                {text}
              </label>
            </div>
          ))}
        </fieldset>
        <img id="close" className="sort_close" src="../../images/close.svg" alt="close popup" />
      </form>
    </div>
  );
};

export default Popup;
