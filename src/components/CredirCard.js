import React from 'react'

function CredirCard(props) {
  const printNumberCard = (num) => {
    return num.slice(0, -4).replace(/./g, '•') + num.slice(-4)
  }
  const logoCard = props.type === 'Visa' ? './img/visa.png' : './img/master-card.svg';
  const styles= {
    background: props.bgColor,
    color: props.color
  }
  return (
      <div style={styles} className="card">
        <div>
          <img src={logoCard} alt=""/>
        </div>
        <h2>{printNumberCard(props.number)}</h2>
        <p>Expires {props.expirationMonth}/{props.expirationYear} <span>{props.bank}</span></p>
        <p>{props.owner}</p>
      </div>
  )
}


export default CredirCard;