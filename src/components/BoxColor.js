import React from 'react'

function BoxColor(props) {
  const { r, g, b } = props
  const colorString = 'rgb(' + r + ',' + g + ',' + b + ')'
  // console.log(colorString)
  const divStyle = {
    backgroundColor: colorString,
    //backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')',
    height: '10rem',
    width: '10rem',
    padding: '2rem',
    textAlign: 'center'
  }
  return (
    <div style={divStyle}>
      {colorString}
    </div>
  )
}

export default BoxColor

