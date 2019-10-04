import React, { Component } from 'react';
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
      color,
    } = this.props;
    const lastFourNumber = number.substring(number.length - 4);
    return (
      <div className="CreditCard">
        <div className="type">
          <img src="" alt="" />
        </div>
        <div className="number">•••• •••• •••• {lastFourNumber} </div>
        <div className="expires-bank">
          <span>
            Expires {expirationMonth}/{expirationYear}{' '}
          </span>
          <span className="bank">{bank} </span>
        </div>
        <div className="owner">{owner}</div>
      </div>
    );
  }
}

export default CreditCard;
