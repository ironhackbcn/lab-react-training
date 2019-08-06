import React from 'react'

function CreditCard(props) {

  function esconderNum (){
    let maskString = '';
    for (var i = 0; i < props.number.length; i++){
      if(i < props.number.length - 4){
        maskString = maskString  + '*';
        }
        else {
          maskString = maskString + props.number.charAt(i)
        }
      }
      return maskString
    }
  



  return (
    <div >
      <p>type: {props.type}</p>

      <p>number: {esconderNum()}</p>
      <p>expiration: {props.expirationMonth}/{props.expirationYear}</p>


      <p>bank: {props.bank}</p>
      <p>owner: {props.owner}</p>

      <p>bgColors: {props.bgColors}</p>
      <p>color: {props.color}</p>
    </div>
  )
}

export default CreditCard
