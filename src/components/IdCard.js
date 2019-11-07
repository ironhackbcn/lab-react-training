import React from 'react'

const IdCard = (props) => {
  console.log(props.birth)
  return (
    <div className="IdCard box">
      <img src={props.picture} alt={props.firstName}></img>
      <ul className="right">
        <li><strong>First name</strong>: {props.firstName}</li>
        <li><strong>Last name</strong>: {props.lastName}</li>
        <li><strong>Gender</strong>: {props.gender}</li>
        <li><strong>Height</strong>: {props.height} cm</li>
        <li><strong>Birth</strong>: {props.birth.toString().slice(0,15)}</li>
      </ul>
    </div>
  );
}

export default IdCard;
