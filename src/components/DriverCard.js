import React, { Component } from "react";
import "./DriverCard.css";
import IdCard from "./IdCard";

class DriverCard extends Component {
  render() {
    const { name, rating, img, car } = this.props;

    const numberChildren = Math.round(rating);
    const text = "★★★★★☆☆☆☆☆";
    const stars = text.slice(5 - numberChildren).slice(1, -numberChildren);

    return (
      <div className="DriverCard">
        <div className="left">
          <img src={img} alt="text" />
        </div>
        <div clasName="right">
          <h2>{name}</h2>
          <div>{stars}</div>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    );
  }
}

export default DriverCard;
