import React from 'react';
import classNames from 'classnames';
import './index.scss';

const SortDialog = ({ sortOption, sortDialog, onSortOptions }) => {
  const input = ['A-Z', 'By birthday'];

  return (
    <div className={classNames('popup', { visible: sortDialog })}>
      <form onClick={e => onSortOptions(e)} className="sort" action="">
        <fieldset>
          <legend className="sort__legend">Sort</legend>
          {input.map((text, i) => (
            <div key={i}>
              <label className="sort__label" htmlFor={i}>
                <input
                  className="sort__input"
                  type="radio"
                  id={i}
                  name="sort"
                  value={i}
                  checked={i == sortOption}
                />
                {text}
              </label>
            </div>
          ))}
        </fieldset>
        <img id="close" className="sort__close" src="./images/close.svg" alt="close popup" />
      </form>
    </div>
  );
};

export default SortDialog;
