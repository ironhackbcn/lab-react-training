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
    <div style={divStyle} className="card-container" >
      <img src={cardType} alt={props.type}></img>
      < p className="card-number" > {maskNumber(props.number)}</p>
      <div className="card-info">
        <p className="card-expiration">Expires: {props.expirationMonth} / {props.expirationYear}</p>
        <p className="card-bank">{props.bank}</p>
      </div>
      <p className="card-owner">{props.owner}</p>
    </div >
  )
}

export default CreditCard