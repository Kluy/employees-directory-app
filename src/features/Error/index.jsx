import React from 'react';
import { Link } from 'react-router-dom';
import errorConfig from './configs';

import './index.scss';

const Error = ({ error: { img, textMain, text, reloadText } = errorConfig }) => {
  return (
    <div className="error">
      <div>
        <img className="error__image" src={img} alt="" />
        <div className="error__message">{textMain}</div>
        <div className="error__text">{text}</div>
        {reloadText && (
          <Link reloadDocument={true}>
            <div className="error__text error__text_violet">{reloadText}</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Error;
