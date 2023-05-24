import React from 'react';
import './heading.scss';

const Heading = ({ text, newClass }) => {
  return <h1 className={`h1 ${newClass}`}>{text}</h1>;
};

export default Heading;
