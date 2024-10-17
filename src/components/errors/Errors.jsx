import React from 'react';
import './errors.scss';

const Errors = ({ text }) => {
  return (
    <section className="section section--violet">
      <h1 className="header header--white">Search</h1>
      <div className="error-text">{text}</div>
    </section>
  );
};

export default Errors;
