import React from 'react';
import './button.scss';

const Button = ({ className, text, type, disabled, onClick }) => {
  return (
    <button className={className} type={type} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
