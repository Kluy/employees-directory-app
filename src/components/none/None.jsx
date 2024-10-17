import React from 'react';
import './none.scss';

const None = ({ img, textMain, text, reloadText }) => {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div className="error">
      <div>
        <img className="error_image" src={img} alt="" />
        <div className="error_message">{textMain}</div>
        <div className="error_text">{text}</div>
        {reloadText && (
          <div onClick={reloadPage} className="error_text error_text--violet">
            {reloadText}
          </div>
        )}
      </div>
    </div>
  );
};

export default None;
