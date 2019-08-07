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
    return number.slice(0, -4).replace(/./g, '·') + number.slice(-4)
  }

  return (
    <div style={divStyle} className="cc-container" >
      <img className="cc-brand" src={cardType} alt={props.type}></img>
      <p className="cc-number" > {maskNumber(props.number)}</p>
      <div className="cc-info">
        <p className="cc-expiration">Expires: {props.expirationMonth} / {props.expirationYear}</p>
        <p className="cc-bank">{props.bank}</p>
      </div>
      <p className="cc-owner">{props.owner}</p>
    </div >
  )
}

export default CreditCard