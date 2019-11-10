import React from 'react'

export const NumbersBox = (props) => {
  return (
  <li className="NumbersBox" style={{backgroundColor: props.color}}>{props.value}</li>
  )
}

export default NumbersBox;
