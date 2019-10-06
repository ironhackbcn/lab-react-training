import React, { Component } from "react";
import "./Random.css";

function rand(min, max) {
  return Math.floor(min + (max - min + 1) * Math.random());
}
// option 1
const Random = props => {
  return (
    <div className="Random">
      Random value between {props.min} and {props.max} =>{" "}
      {rand(props.min, props.max)}
    </div>
  );
};

export default Random;
