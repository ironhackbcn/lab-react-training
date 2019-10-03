import React from 'react';
import './Random.css';

function Random({ min, max }) {
  const number = Math.floor(Math.random() * (max - min)) + min;
  console.log(number);
  return (
    <div class="random-box">
      <p>Random value between {min} and {max} => {number}</p>
    </div>
  );
}

export default Random;