import React from 'react'
import Rating from './Rating'

const DriverCard = (props) => {
    return (
        <div style={{backgroundColor:'blue', borderRadius:6, display:'flex', justifyContent:'center'}} >
        <figure style={{borderRadius: '50%', height:50, width:50}} >
            <img src={props.img} alt="" style={{width:'100%'}} />
        </figure>
        <div style={{color: 'white'}} >
            <h2>{props.name}</h2>
            <Rating>{props.rating}</Rating>
            <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
            
        </div>
    )
}

export default DriverCard
