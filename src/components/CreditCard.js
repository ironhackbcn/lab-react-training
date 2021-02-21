import React from "react";
import "./CreditCard.css";

// option 1
const CreditCard = props => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
  } = props;
  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <section>
        <p>•••• •••• •••• {number.slice(12, 16)}</p>
      </section>
      <section>
        {expirationMonth < 10 ? `0${expirationMonth}` : `${expirationMonth}`}
        {expirationYear.toString().slice(2, 4)}
      </section>
      <section>{bank}</section>
      <section>{owner}</section>
      <section>
        <img
          className="CreditCard-pic"
          src={type === "Visa" ? "/img/visa.png" : "/img/master-card.svg"}
          alt=""
        />
      </section>
    </div>
  );
};

export default CreditCard;
