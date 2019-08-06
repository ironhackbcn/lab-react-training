import React from 'react'

function CreditCard(props) {
  
  const {type,number,expirationMonth,expirationYear,bank,owner,bgColor,color} = props;

  return (
    <div style={{backgroundColor: bgColor,color: color}}>
      <img src={ type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg' } width={50} alt=""/>
      <p>{number}</p>
      <p>Expires {expirationMonth.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}/{expirationYear.toString().slice(2, 4)}</p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  )
}

export default CreditCard;


