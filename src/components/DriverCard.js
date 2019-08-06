import React from 'react'

export default function DriverCard(props) {
  const intRating = Math.round(props.rating)
  const stars = (rating) =>{

    let starFilled = '★';
    let starEmpty = '☆';
    let starsArr = new Array(5);
    for(let i = 0; i < 5; i++){
      if(i < rating){
        starsArr[i] = starFilled;
      }else{
        starsArr[i] = starEmpty;
      }
    }
    
    return starsArr.join('')    
  } 
  return (
    <div className="driver-card">
      <div><img src={props.img} alt={props.name}/></div>
      <div>
        <h3>{props.name}</h3>
        <p>{stars(intRating)}</p>
        <p>{props.car.model} - {props.car.licensePlate}</p>
      </div>
    </div>
  )
}
