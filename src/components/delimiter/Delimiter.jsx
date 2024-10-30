import React from 'react';
import './delimiter.scss';

const Delimiter = () => {
  return (
    <div className="delimiter">
      <div className="delimiter_line"></div>
      <div className="delimiter_text"> {new Date().getFullYear() + 1}</div>
      <div className="delimiter_line"></div>
    </div>
  );
};

export default Delimiter;
