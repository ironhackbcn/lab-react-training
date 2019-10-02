import React from 'react';

const rgbToHex = function(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = '0' + hex;
  }
  return hex;
};
const fullColorHex = function(r, g, b) {
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return red + green + blue;
};

const BoxColor = (props) => {
  const { r, g, b } = props;
  const backgroundColor = {
    'background-color': 'rgb(' + r + ',' + g + ',' + b + ')',
  };
  return (
    <div style={backgroundColor}>
      rgb({r},{g},{b})<br />#{fullColorHex(r, g, b)}
    </div>
  );
};
export default BoxColor;
