import React from 'react'

function Random(props) {
  const random = () => {
    return Math.round(Math.random()*(props.max - props.min) + props.min);
    
 }
  return (
   
    <div>
     <p>Random value between {props.min} and{props.max} -> {random()}</p>
    </div>
  )
}

export default Random;
