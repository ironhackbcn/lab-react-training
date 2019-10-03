import React, { Component } from "react";
import "./IdCard.css";

const IdCard = props => {
  return (
    <div>
      <p>{props.lastName}</p>
      <p>{props.firstName}</p>
      <p>{props.gender}</p>
      <p>{props.height}</p>
      {/* <p>{props.birth}</p> */}
      <p>{props.picture}</p>
    </div>
  );
};

export default IdCard;
