import React, { Component } from 'react';
import './Random.css';

// class Random extends Component {
//   randomIntFromInterval(min, max) {
//     // min and max included
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
//   render() {
//     const { min, max } = this.props;

//     return (
//       <div className="Random">
//         Random value between {min} and {max} =>{' '}
//         {Random.randomIntFromInterval(min, max)}
//       </div>
//     );
//   }
// }

function Random(props) {
  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="Random">
      Random value between {props.min} and {props.max} =>
      {randomIntFromInterval(props.min, props.max)}
    </div>
  );
}

export default Random;
