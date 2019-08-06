import React from 'react'

function BoxColor(props) {
  const { r, g, b } = props
  const colorString = 'rgb(' + r + ',' + g + ',' + b + ')'
  // console.log(colorString)
  const divStyle = {
    backgroundColor: colorString,
    //backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')',
    height: '10rem',
    width: '10rem'
  }
  return (
    <div style={divStyle}>
      {colorString}
    </div>
  )
}

export default BoxColor

