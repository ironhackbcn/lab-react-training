import React from 'react'

const DriverCard = (props) => {
  let string = '';
  for (let i = 0; i < Math.round(props.rating); i++) {
    string += '★';
  }


  return (
    <div className="DriverCard">
      <img className="left" src={props.img} alt={props.name} style={{maxWidth: 100 + '%'}}></img>
      <div className="right">
        <h2>{props.name}</h2>
        <div className="ratingCard">
          {string.padEnd(5, "☆")}
        </div>
        <p>{props.car.model} - {props.car.licensePlate}</p>
      </div>
    </div>
  )
}

export default DriverCard;
