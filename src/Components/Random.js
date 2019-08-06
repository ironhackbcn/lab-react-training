import React from 'react'

const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function Random(props) {
  return (
    <p>Random value between {props.min} and {props.max} => {randomIntegerInRange(props.min, props.max)}</p>
  )
}

export default Random;