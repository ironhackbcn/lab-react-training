import React, { Component } from 'react'
import Rating from './Rating';

class DriverCard extends Component {
  render() {
    const {name, rating, img, car} = this.props;
    return (
      <article>
        <div>
          <img src={img} alt="owner profile"/>
        </div>
        <div>
          <h2>{name}</h2>
          <Rating>{rating}</Rating>
          <p>{`${car.model} - ${car.licensePlate}`}</p>
        </div>
      </article>
    )
  }
}

export default DriverCard;
