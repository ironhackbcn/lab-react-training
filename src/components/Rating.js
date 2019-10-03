import React from 'react';
import './Rating.css';

function Ratings(props) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    Math.round(props.children) <= i ? (stars += '☆') : (stars += '★');
  }
  return (
    <div className="Rating">
      <p>{stars}</p>
    </div>
  );
}

export default Ratings;
