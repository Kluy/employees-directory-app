import React from 'react';
import './text.scss';
import classNames from 'classnames';
import Tooltip from '../tooltip/Tooltip';
import { useState } from 'react';

const Text = ({ text, className }) => {
  const [tooltip, setTooltip] = useState(false);

  const onMouseOverHandler = e => {
    if (e.target.scrollWidth > e.target.offsetWidth) {
      setTooltip(true);
    }
  };

  const onMouseOutHandler = () => {
    setTooltip(false);
  };

  return (
    <>
      <p
        onMouseOut={onMouseOutHandler}
        onMouseOver={e => onMouseOverHandler(e)}
        className={classNames('p1', className)}
      >
        {text}
      </p>
      {tooltip ? <Tooltip text={text} /> : ''}
    </>
  );
};

export default Text;
