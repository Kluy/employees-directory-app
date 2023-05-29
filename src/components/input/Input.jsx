import React from 'react';
import './input.scss';

const Input = ({ placeholder }) => {
  return <input className="input" type="text" placeholder={placeholder} />;
};

export default Input;
