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
      <div className="CreditCard-type">
        <img
          src={type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg'}
          alt="#"
        />
      </div>
      <div className="CreditCard-number">
        <p>•••• •••• •••• {number.slice(12, 16)}</p>
      </div>
      <div className="Credit-Card-expires">
        <p>
          Expires{' '}
          {expirationMonth < 10
            ? '0' + expirationMonth.toString()
            : expirationMonth.toString()}
          /{expirationYear.toString().slice(2, 4)}
          {'  '} {bank}
        </p>
      </div>
      <div className="CreditCard-name">
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
