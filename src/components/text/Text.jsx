import React from 'react';
import './text.scss';
import classNames from 'classnames';

const Text = ({ text, className }) => {
  return <p className={classNames('p1', className)}>{text}</p>;
};

export default Text;
