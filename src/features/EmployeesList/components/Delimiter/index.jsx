import React from 'react';
import moment from 'moment/moment';

import './index.scss';

const Delimiter = ({ date }) => {
  return (
    <div className="delimiter">
      <div className="delimiter_line"></div>
      <div className="delimiter_text"> {moment(date).format('YYYY')}</div>
      {/* <div className="delimiter_text"> {new Date().getFullYear() + 1}</div> */}
      <div className="delimiter_line"></div>
    </div>
  );
};

export default Delimiter;
