import React from 'react';
import moment from 'moment/moment';

import './index.scss';

const Delimiter = ({ date }) => {
  return (
    <div className="delimiter">
      <div className="delimiter__line"></div>
      <div className="delimiter__text"> {moment(date).format('YYYY')}</div>
      <div className="delimiter__line"></div>
    </div>
  );
};

export default Delimiter;
