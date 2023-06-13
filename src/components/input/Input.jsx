import React from 'react';
import classNames from 'classnames';
import './input.scss';

const Input = ({
  onChange,
  type,
  placeholder,
  id,
  className,
  name,
  value,
  minlength,
  maxlength,
}) => {
  return (
    <input
      onChange={onChange}
      className={classNames('input', className)}
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      minLength={minlength}
      maxLength={maxlength}
      required
    />
  );
};

export default Input;
