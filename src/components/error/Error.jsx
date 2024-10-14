import React from 'react';
import './error.scss';

const Error = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="error">
      <div>
        <img className="error_image" src="../images/ufo.svg" alt="" />
        <div className="error_message">Unexpected error occured...</div>
        <div className="error_text">Try again bit later</div>
        <div onClick={reloadPage} className="error_text error_text--violet">
          Reload page
        </div>
      </div>
    </div>
  );
};

export default Error;
