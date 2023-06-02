import React from 'react';
import './text.scss';
import classNames from 'classnames';
import Tooltip from '../tooltip/Tooltip';

const Text = ({ onMouseOver, text, className }) => {
  return (
    <>
      {/* <p onMouseOver={e => onMouseOver(e, text)} className={classNames('p1', className)}> */}
      <p className={classNames('p1', className)}>{text}</p>
      {/* <Tooltip text={text} /> */}
    </>
  );
};

export default Text;
