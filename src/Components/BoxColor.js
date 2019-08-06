import React from 'react'

const divStyle = (r,g,b) => {
  const style = `rgb(${r}, ${g}, ${b})`
  return style;
};

const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

function BoxColor(props) {
  const {r,g,b} = props;
  return (
    <div style={{backgroundColor: divStyle(r, g, b)}}>
      {divStyle(r, g, b)}<br/>
      #{RGBToHex(r, g, b)}
    </div>
  )
}

export default BoxColor;

