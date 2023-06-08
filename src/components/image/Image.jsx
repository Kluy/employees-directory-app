import React from 'react';
import './image.scss';

const Image = ({ src, alt, className }) => {
  return (
    <img
      className={className}
      src={!src || src.includes('placeholder') ? '../../images/photo-cover.svg' : src}
      alt={alt}
    />
  );
};

export default Image;
