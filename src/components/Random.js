import React from 'react'

const Random = (props) => {
  const random = Math.floor(Math.random() * props.max) + props.min;
  return (
    <div className="box">
      <p>Random value between {props.min} and {props.max} => {random}</p>
    </div>
  )
}

export default Random;
