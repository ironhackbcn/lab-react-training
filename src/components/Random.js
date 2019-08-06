import React from 'react'

const Random = (props)  => { 
  const random = () => {
      return Math.floor(Math.random()*(props.max - props.min) + props.min)}
  return (
   
    <div>
      <p>Random value between {props.min} and {props.max} => {random()}</p>
    </div>
  )
}

export default Random;