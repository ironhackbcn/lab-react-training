import React from 'react'

function BoxColor(props) {
  const { r, g, b } = props
  const colorString = 'rgb(' + r + ',' + g + ',' + b + ')'
  // console.log(colorString)
  const divStyle = {
    backgroundColor: colorString,
    // also works with backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')',
    height: '9rem',
    width: '9rem',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    padding: '2rem',
    fontSize: '1.125rem',
    textAlign: 'center'
  }

  const colorToHex = (color) => {
    let hex = Number(color).toString(16);
    return hex.length < 2 ? hex = '0' + hex : hex
  }

  let rgbToHex = (r, g, b) => {
    const red = colorToHex(r);
    const green = colorToHex(g);
    const blue = colorToHex(b);
    return red + green + blue;
  }

  return (
    <div style={divStyle}>
      <p>{colorString}</p>
      <p>#{rgbToHex(props.r, props.g, props.b)}</p>
    </div>
  )
}

export default BoxColor

