import React, { Component } from 'react';
import './CreditCard.css';

class Credit extends Component {
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
    return (
      <div
        className="credit- card-section"
        style={{ backgroundColor: bgColor, color: color }}
      >
        <div className=" card-logo">{type}</div>
        <p> {number}</p>
        <div className="credit-card-info">
          <p> {expirationMonth}</p>
          <p> {expirationYear}</p>
          <p> {bank}</p>
          <p> {owner}</p>
        </div>
      </div>
    );
  }
}

export default Credit;
