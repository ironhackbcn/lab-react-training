import React from "react";

// Function to convert from RGB to HEX
var rgbToHex = function(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

var fullColorHex = function(r, g, b) {
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red + green + blue;
};

const BoxColor = ({ children, r, g, b }) => {
  const rgb = `rgb(${r},${g},${b})`;
  const hex = "#" + fullColorHex(r, g, b);
  children = rgb + " " + hex;
  const boxStyle = {
    backgroundColor: `rgba(${r}, ${g}, ${b})`
  };
  return (
    <div className="box-color" style={boxStyle}>
      {children}
    </div>
  );
};

export default BoxColor;
