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
          {input.map((text, id) => (
            <div>
              <label className="sort__label" for={id}>
                <input
                  className="sort__input"
                  type="radio"
                  id={id}
                  name="sort"
                  value={id}
                  checked={id == sortOption}
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