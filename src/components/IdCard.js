import React, { Component } from "react";
import "./IdCard.css";

// option 1
const IdCard = props => {
  return (
    <div className="IdCard">
      <div className="IdCard-pic">
        <img src={props.picture} alt=""></img>
      </div>
      <div>
        <p>{props.lastName}</p>
        <p>{props.firstName}</p>
        <p>{props.gender}</p>
        <p>{props.height}</p>
        <p>{props.birth.toString()}</p>
      </div>
    </div>
  );
};

// option 2
// function IdCard(props) {
//   return <h1>Hello, {props.lastName}</h1>;
// }

// option 3
// class IdCard extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.lastName}</h1>;
//   }
// }

export default IdCard;
