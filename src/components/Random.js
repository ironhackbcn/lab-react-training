import React from 'react';
import './Random.css';

const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function Random(props) {
  return (
    <p className="box">
      Random value between {props.min} and {props.max} =>{' '}
      {randomIntFromInterval(props.min, props.max)}
    </p>
  );
}

export default Random;
