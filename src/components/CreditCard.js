import React from 'react';
import '../css/CreditCard.css'

function CreditCard(props){
    const {type,number,expirationMonth,expirationYear,bank,owner,bgColor,color} = props;
    const result = {'background-color': bgColor, 'color': color};
    
    return(
        <div className="credit-card" style={result}>
            <img src={type === "Visa" ? "/img/visa.png" : "/img/master-card.svg"}  align="right" alt="logo-bank"></img>
            
            <div className="number">
                •••• •••• •••• {number.slice(-4)}
            </div>
            <p >
                
                Expires {expirationMonth}/{expirationYear} {bank} <br/>
                {owner}
            </p>
        </div>
    );
}

export default CreditCard;