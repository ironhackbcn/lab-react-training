import React, { Component } from 'react'
import Rating from './Rating'

 const DriverCard= (props) =>  {
   console.log(props.car)
    return (
      <div className="container">
        <img src={props.img} alt=""/>
        <p>{props.name}</p>
        <Rating> {props.rating}</Rating>
        <p>{props.car.model}, {props.car.licensePlate} </p>
      </div>
    )
  }
export default DriverCard;