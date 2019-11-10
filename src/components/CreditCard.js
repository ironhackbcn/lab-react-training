import React from 'react'

const CreditCard = (props) => {
  let imgUrl = '';
  if (props.type === "Visa") {
    imgUrl = './img/visa.png'
   } else {
    imgUrl = './img/master-card.svg';
   }
  return (
    <div className="CreditCard" style={{backgroundColor: props.bgColor, color: props.color}}>
      <div className="type">
        <img src={imgUrl} alt={props.type}/>
      </div>
      <div className="number">
        <p>•••• •••• •••• {props.number.slice(12, 16)}</p>
      </div>
      <div className="expiresBank">
        <span>Expires {props.expirationMonth}/{props.expirationYear}</span><span className="bank">{props.bank}</span>
      </div>
      <div className="owner">{props.owner}</div>
    </div>
  )
}

export default CreditCard;
