import React from 'react'
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className='driver-container'>
      <img className='driver-image' src={props.image} alt={props.name} />
      <div className='driver-details'>
        <h3 className='driver-name'>{props.name}</h3>
        <div className='driver-rating'><Rating children={props.children} /></div>
        <p className='driver-car'>{props.car.model}-{props.car.licensePlate}</p>
      </div>
    </div>
  )
}

export default DriverCard