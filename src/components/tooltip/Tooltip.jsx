import React from 'react';
import './tooltip.scss';

const Tooltip = ({ tooltip }) => {
  return (
    <div className="tooltip" style={{ ...tooltip.coordinates }}>
      {/* <div className="tooltip">{tooltip.text} */}
      {tooltip.text}
    </div>
  );
};

export default Tooltip;
