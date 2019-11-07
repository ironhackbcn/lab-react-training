import React from 'react'

const BoxColor = (props) => {
  const componentToHex = (c) => {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  const hex = rgbToHex(props.r, props.b, props.g);

  return (
    <div className="box tx-center" style={{backgroundColor: 'rgb(' + props.r + ', ' + props.g + ', ' + props.b + ')'}} >
      <p>rgb({props.r},{props.g},{props.b})</p>
      <p>{hex}</p>
    </div>
  )
}

export default BoxColor;
