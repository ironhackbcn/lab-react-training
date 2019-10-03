import React from 'react';
import Rating from './Rating';
import './DriverCard.css';

function DriverCard(props) {
  const { name, rating, img, car } = props;
  return (
    <div className="DriverCard">
      <div
        className="DriverCard-img-wrapper"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* <img src={img} alt="#" /> */}
      </div>
      <div className="DriverCard-info">
        <p className="DriverCard-name">{name}</p>
        <Rating>{rating}</Rating>
        <p className="DriverCard-Car">
          {car.model}-{car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
