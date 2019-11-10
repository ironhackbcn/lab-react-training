import React from 'react'

export const NumbersBox = (props) => {
  console.log(props);
  return (
  <li className="NumbersBox" style={{backgroundColor: props.color}}>{props.value}</li>
  )
}

export default NumbersBox;
