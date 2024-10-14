import React from 'react';
import './errors.scss';

const Errors = ({ input, sortId, onSetInput, onOpenPopup }) => {
  return (
    <section className="section section--violet">
      <h1 className="header header--white">Search</h1>
      <div className="error-text">Few seconds, downloading...</div>
      <div className="error-text">Can't update the data. Check internet connection.</div>
    </section>
  );
};

export default Errors;
