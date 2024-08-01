import React from 'react';
import classNames from 'classnames';
import './text.scss';

const Text = ({ text, className }) => {
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
    </>
  );
};

export default Text;
