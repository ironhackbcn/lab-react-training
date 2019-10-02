import React from 'react'

export default function CreditCard(params) {
  return (
    <>
      {params.creditCardrarray.map((card,index) => {
        return (
          <div key={index}>
            <p>{card.ype}</p>
            <h3>{card.number}</h3>
            <p>Expires {card.expirationMonth}/{card.expirationYear} {card.bank}</p>
            <p>{card.owner}</p>
          </div>
        )
      })}
    </>
  )
}
