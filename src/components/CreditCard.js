import React, { Component } from "react";
import "./CreditCard.css";

class CreditCard extends Component {
  render() {
    const {
      type,
      number,
      expirationMonth,
      expirationYear,
      bank,
      owner,
      bgColor,
      color,
    } = this.props;

    const lastFourNumber = number.slice(-4);
    const divStyle = {
      color: `${color}`,
      backgroundColor: `${bgColor}`,
    };

    const newExpirationMonth = `0${expirationMonth}`.slice(-2);
    let imgType;

    if (type === "Visa") {
      imgType = "/img/visa.png";
    } else {
      imgType = "/img/master-card.svg";
    }
    return (
      <div className="CreditCard" style={divStyle}>
        <div className="type">
          <img src={imgType} alt="" />
        </div>
        <div className="number">•••• •••• •••• {lastFourNumber} </div>
        <div className="expires-bank">
          <span>
            Expires {newExpirationMonth}/{expirationYear}{" "}
          </span>
          <span className="bank">{bank} </span>
        </div>
        <div className="owner">{owner}</div>
      </div>
    );
  }
}

export default CreditCard;
