import React from "react";
import "./svg.css";

const ICell = () => {
  return (
    <div className="icell-container">
      <svg className="svg-icell" viewBox="0 0 2200 300">
        <text
          className="i-cell-text"
          x="50%"
          y="50%"
          dy=".35em"
          textAnchor="middle"
        >
          Beyond Orbits
        </text>
      </svg>
    </div>
  );
};

export default ICell;