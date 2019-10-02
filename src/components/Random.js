import React from 'react';
import '../css/greetings.css';

const Random = (props) => {
  const { min, max } = props;
  const rnd = Math.floor(Math.random() * (max + min) + min);

  return (
    <div className="greetings">
      Random value between {min} and {max} => {rnd}
    </div>
  );
};
export default Random;
