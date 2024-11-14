import classNames from 'classnames';
import React from 'react';
import './popup.scss';

const Popup = ({ sortOption, popupOpen, onSortOptions }) => {
  const input = ['A-Z', 'By birthday'];

  return (
    <div className={classNames('popup', { visible: popupOpen })}>
      <form onClick={e => onSortOptions(e)} className="sort" action="">
        <fieldset>
          <legend className="sort_legend">Sort</legend>
          {input.map((text, id) => (
            <div>
              <input
                className="sort_input"
                type="radio"
                id={id}
                name="sort"
                value={id}
                checked={id == sortOption}
              />
              <label className="sort_label" for={id}>
                {text}
              </label>
            </div>
          ))}
        </fieldset>
        <img id="close" className="sort_close" src="./images/close.svg" alt="close popup" />
      </form>
    </div>
  );
};

export default Popup;
