import React from 'react'

function BoxColor(props) {
  const rgbToHex = (color) => {
    let hex = Number(color).toString(16);
    if (hex.length < 2) {
      hex = '0' + hex;
    } return hex;
  }
  const fullColorToHex = (red,green,blue) => {
    let r = rgbToHex(red);
    let g = rgbToHex(green);
    let b = rgbToHex(blue);
    return r+g+b
  }
  const background = {background: `rgb(${props.r},${props.g},${props.b})`};
  return (
    <div className="box" style={background}>
      <p>rgb({props.r}, {props.g}, {props.b})</p>
      <p>#{fullColorToHex (props.r, props.g, props.b)}</p>
    </div>
  )
}

export default BoxColor;
