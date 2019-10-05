import React, { Component } from "react";

class CreditCard extends Component {
  render() {
    const divStyle = {
      background: this.props.bgColor,
      color: this.props.color,
      width: `300px`,
      height: `170px`
    };
    const hideNumber = number => {
      return "**** **** **** " + number.slice(-4);
    };

    return (
      <div style={divStyle}>
        <p>{this.props.type}</p>
        <p>{hideNumber(this.props.number)}</p>
        <p>
          Expires {this.props.expirationMonth}
          <span>/{this.props.expirationYear}</span>
          <span> {this.props.bank}</span>
        </p>
        <p>{this.props.owner}</p>
      </div>
    );
  }
}

export default CreditCard;
