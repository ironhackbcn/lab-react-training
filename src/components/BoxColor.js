import React, { Component } from "react";

const rgbToHex = (color) => {
  let hex = Number(color).toString(16);
  if (hex.length < 2) 
  {
    hex = "0" + hex;
  }
  return `${hex}`;
};

class BoxColor extends Component {
  render() {
    const { r, g, b } = this.props;
    const bkcolor = `rgb(${r},${g},${b})`;
    return (
      <div style={{ backgroundColor: bkcolor }}>
        <p>
          rgb({r},{g},{b})
        </p>{" "}
        <p>
          #{rgbToHex(r)}
          {rgbToHex(g)}
          {rgbToHex(b)}
        </p>
      </div>
    );
  }
}

export default BoxColor;
