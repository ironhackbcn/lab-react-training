import React from "react";
import "./BoxColor.css";

// option 1
const BoxColor = props => {
  // const { r, g, b } = props;
  const rgb = `rgb(${props.r},${props.g},${props.b})`;

  return (
    <div className="BoxColor" style={{ backgroundColor: rgb }}>
      rgb({props.r},{props.g},{props.b})
    </div>
  );
};

export default BoxColor;
