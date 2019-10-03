import React, { Component } from "react";
import './CreditCard.css';

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
      color
    } = this.props;
    return (
      <div
        className="App-Credit-Card"
        style={{ backgroundColor: bgColor, color: color }}
      >
        <div className="App-Credit-Card-type">
          <img
            src={
              type === "Visa"
                ? "/img/visa.png"
                : "%PUBLIC%/img/master-card.svg"
            }
            alt="Credit card type"
          />
        </div>
        <div className="App-Credit-Card-number">
          <p>•••• •••• •••• {number.slice(12, 16)}</p>
        </div>
        <div className="app-Credit-Card-DataExpire">
          <p>
            {expirationMonth < 10
              ? `0${expirationMonth}`
              : `${expirationMonth}`}{" "}
            / {expirationYear.toString().slice(2, 4)} {"    "} {bank}
          </p>
        </div>
        <div className="app-Credit-Card-Owner">
          <p>{owner.toUpperCase()}</p>
        </div>
      </div>
    );
  }
}

export default CreditCard;
