import React from 'react';
import './none.scss';

const None = () => {
  return (
    <div className="none">
      <div>
        <img className="none_image" src="../images/search-fail.png" alt="" />
        <div className="none_message">We didn't find anyone</div>
        <div className="none_text">Try another request</div>
      </div>
    </div>
  );
};

export default None;
