import React, { Component } from 'react'

class CreditCard extends Component {
  render() {
    const {
       type,
       number,
       expirationMonth,
       expirationYear,
       bank,
       owner,
       bgColor,
       color
      } = this.props;

    const secretNumber = number.toString().split('').map((element, i) =>{
      if(i < 12){
        if((i+1)%4 === 0){
          return '* ';
        } else {
        return '*';
        }
      } else {
        return element;
      }
    })
    const month = expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth
    const year = expirationYear.toString().slice(2,4);

    const getTypeCard = () =>{
      if(type === 'Visa'){
        return process.env.PUBLIC_URL + '/img/visa.png';
      } else {
        return process.env.PUBLIC_URL + '/img/master-card.svg';
      }
    }

    const divStyle = {
      color: color,
      backgroundColor: bgColor
    }

    
    return (
      <article style={divStyle}>
        <div>
          <img src={getTypeCard()} alt="" />
        </div>
        <p>{secretNumber}</p>
        <p>{`Expires ${month}/${year}`}</p>
        <p>{bank}</p>
        <p>{owner}</p>
      </article>
    )
  }
}

export default CreditCard;
