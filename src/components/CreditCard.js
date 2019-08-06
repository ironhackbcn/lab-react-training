import React from 'react'

 function CreditCard(props) {
    // let image = ""
    //  if(type==='Visa'){
         return (
             <div className= "creditcard">
                 <ul>
                     <li>{props.type}</li> 
                     <li>{props.number}</li>
                     <li>Expires {props.expirationMonth}/{props.expirationYear}</li>
                     <li>{props.bank}</li>
                     <li>{props.owner}</li>
                 </ul>
             </div>
         )
     }

export default CreditCard;