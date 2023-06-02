import React from 'react';
import './tooltip.scss';

const Tooltip = ({ tooltip }) => {
  return (
    <div className="tooltip" style={{ ...tooltip.styles }}>
      {tooltip.text}
    </div>
  );
};

export default Tooltip;
