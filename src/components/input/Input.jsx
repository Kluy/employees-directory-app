import React from 'react';
import './input.scss';

const Input = ({ type, placeholder, id, className, name, value }) => {
  return (
    <>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
      />

      {type === 'radio' ? (
        <>
          <label htmlFor={id}>{value}</label>
          <br />
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default Input;
