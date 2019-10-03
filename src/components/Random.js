import React from "react";

const Random = ({ min, max }) => {
  console.log(min, max);
  const randomValue = () => {
    return Math.floor(Math.random() * max) + min;
  };
  return (
    <div className="random-content">
      <p>
        Random value between {min} and {max} =>
        {randomValue()}
      </p>
    </div>
  );
};

export default Random;
