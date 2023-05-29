import React from 'react';
import classNames from 'classnames';

import './input.scss';

const Input = ({ type, placeholder, id, className, name, value }) => {
  return (
    <input
      className={classNames('input', className)}
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
    />
  );
};

export default Input;
