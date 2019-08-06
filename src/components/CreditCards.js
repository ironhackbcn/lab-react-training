import React, { Component } from 'react'

const CreditCards = (props) => {
const {type, number, expirationYear, expirationMonth, bank, owner, bgColor, color} = props;
const divStyle =
{backgroundColor: bgColor, color: color};
    return (
      <div style={divStyle}>
        <p>{type}</p>
        <p>{number}</p>
        <p>Expires {expirationMonth}/{expirationYear}  {bank}</p>
        <p>{owner}</p>
      </div>
    )
}

export default CreditCards;