import React from 'react';
import './BoxColor.css';

const rgbStyle = (r, g, b) => {
  const rgbColor = `rgb(${r}, ${g}, ${b})`;
  return rgbColor;
};

function BoxColor(props) {
  const { r, g, b } = props;
  return (
    <div className="box" style={{ backgroundColor: rgbStyle(r, g, b) }}>
      <h1>{rgbStyle(r, g, b)}</h1>
    </div>
  );
}

export default BoxColor;
