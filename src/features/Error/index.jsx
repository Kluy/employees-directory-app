import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Error = ({ img, textMain, text, reloadText }) => {
  return (
    <div className="error">
      <div>
        <img className="error_image" src={img} alt="" />
        <div className="error_message">{textMain}</div>
        <div className="error_text">{text}</div>
        {reloadText && (
          <Link reloadDocument={true}>
            <div className="error_text error_text--violet">{reloadText}</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Error;
