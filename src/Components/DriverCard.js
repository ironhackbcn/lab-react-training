import React from 'react'
import Rating from './Rating';

function DriverCard(props) {
  const {name,rating,img,car} = props;
  return (
    <div style={{backgroundColor: '#455EB5', color: 'white'}}>
      <img src={img} alt={name} width={100} height={100} style={{borderRadius: 50, objectFit: 'cover'}}/>
      <h3>{name}</h3>
      <Rating>{rating}</Rating>
      <p>{car.model} – {car.licensePlate}</p>
    </div>
  )
}

export default DriverCard;
