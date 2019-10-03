import React from 'react';
import './IdCard.css';

function Random({ min, max }) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  return (
    <div class="card-section">
      <p>
        Random between {min} and {max} is : <strong>{randomNumber}</strong>
      </p>
    </div>
  );
}

export default Random;
