import React from 'react';
import './tooltip.scss';

const Tooltip = ({ tooltip }) => {
  return (
    <div className="tooltip" style={{ ...tooltip.coordinates }}>
      {tooltip.text}
    </div>
  );
};

export default Tooltip;
