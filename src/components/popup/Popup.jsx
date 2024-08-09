import classNames from 'classnames';
import React from 'react';
import './popup.scss';

const Popup = ({ sortId, popupOpen, onSortOptions }) => {
  const input = [
    { id: 'a-z', text: 'A-Z' },
    { id: 'birthday', text: 'By birthday' },
  ];

  return (
    <div className={classNames('popup', { visible: popupOpen })}>
      <form onClick={e => onSortOptions(e)} className="sort" action="">
        <fieldset>
          <legend className="sort_legend">Sort</legend>
          {input.map(({ id, text }) => (
            <div>
              <input
                className="sort_input"
                type="radio"
                id={id}
                name="sort"
                value={id}
                checked={id === sortId ? true : false}
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
