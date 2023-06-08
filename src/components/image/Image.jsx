import React from 'react';
import './image.scss';

const Image = ({ src, alt, className, type }) => {
  return (
    <img
      className={className}
      src={(type === 'photo') & src.includes('placeholder') ? '../../images/photo-cover.svg' : src}
      alt={alt}
    />
  );
};

export default Image;
