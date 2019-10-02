import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="type">
        <img src={type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg'} />
      </div>
      <div className="number">
        <p>•••• •••• •••• {number.slice(12, 16)}</p>
      </div>
      <div className="expires-bank">
        <p>
          Expires{' '}
          {expirationMonth < 10
            ? '0' + expirationMonth.toString()
            : expirationMonth.toString()}
          /{expirationYear.toString().slice(2, 4)}
          {'  '} {bank}
        </p>
      </div>
      <div className="owner">
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
