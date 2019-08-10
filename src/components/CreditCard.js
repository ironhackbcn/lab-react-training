import React from 'react'

function CreditCard(props) {
  const divStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
    display: 'flex',
    flexFlow: 'column nowrap'
  }

  const cardType = props.type === 'Visa' ? './img/visa.png' : './img/master-card.svg'

  const maskNumber = (number) => {
    return number.slice(0, -4).replace(/./g, '• ') + number.slice(-4)
  }

  const addZero = (month) => {
    const monthStr = month.toString();
    return monthStr.length < 2 ? '0' + monthStr : monthStr;
  }

  const removeDigits = (year) => {
    const yearStr = year.toString();
    return yearStr.slice(0, -2).replace(/./g, '') + yearStr.slice(-2)
  }

  return (
    <div style={divStyle} className="cc-container" >
      <img className="cc-brand" src={cardType} alt={props.type}></img>
      <p className="cc-number" > {maskNumber(props.number)}</p>
      <div className="cc-info">
        <p className="cc-expiration">Expires: {addZero(props.expirationMonth)}/{removeDigits(props.expirationYear)}</p>
        <p className="cc-bank">{props.bank}</p>
      </div>
      <p className="cc-owner">{props.owner}</p>
    </div >
  )
}

export default CreditCard