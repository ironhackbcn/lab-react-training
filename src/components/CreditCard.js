import React from "react";

const CreditCard = ({ type, number, bgcolor }) => {
  const logoCard = () => {
    if (type === "Visa") {
      return "./img/visa.png";
    }
  };

  const creditStyle = {
    backgroundColor: "bgcolor"
  };
  return (
    <div className="credit-card" style={creditStyle}>
      <div className="logo">
        <img src={logoCard()} alt={type} />
      </div>
      <div className="credit-number">{number}</div>
      <div className="credit-info"></div>
    </div>
  );
};

export default CreditCard;
