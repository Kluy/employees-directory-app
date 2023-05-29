import React from 'react';
import classNames from 'classnames';
import './button.scss';

const Button = ({ className, text, type, disabled, onClick }) => {
  return (
    <button
      className={classNames('button', className)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
