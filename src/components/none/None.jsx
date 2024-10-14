import React from 'react';

const None = () => {
  return (
    <div className="error">
      <div>
        <img className="error_image" src="../images/search-fail.png" alt="" />
        <div className="error_message">We didn't find anyone</div>
        <div className="error_text">Try another request</div>
      </div>
    </div>
  );
};

export default None;
