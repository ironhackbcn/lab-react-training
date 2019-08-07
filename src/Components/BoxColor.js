import React from 'react';


 function BoxColor( props )  {
  var a = `rgb( ${props.r}, ${props.g}, ${props.b} )`
  var divstyle = {backgroundColor: a}
  return (
    <div style= {divstyle}>
      <p> {a} </p>
    </div>
  )
}
export default BoxColor;
