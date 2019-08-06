import React from 'react'
import Rating from './Rating';

function DriverCard(props) {
    return (
        <div>
            <img src='{props.img}'></img>
            <p> {props.car}</p>
            <Rating></Rating>
            <p></p>
        </div>
    )
}
export default DriverCard;