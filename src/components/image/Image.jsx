import React from 'react';
import './image.scss';

const Image = ({ src, alt }) => {
  return <img className="photo" src={src} alt={alt} />;
};

export default Image;
