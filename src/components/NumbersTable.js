import React from 'react';
import NumbersBox from './NumbersBox';

const generateArray = (number) => {
  let arr = [];
  let color = '';

  for (let i = 1; i <= number; i++) {
    (i % 2 === 0) ? color = "red" : color = 'white';
    arr.push(
      {
        value: i,
        color: color
      }
    )
  }
  return arr;
}


const NumbersTable = (props) => {
  
  return (
    <ul className="NumbersTable">
      {
        generateArray(props.limit).map((element, index) =>
          <NumbersBox
            key = {index}
            value = {element.value}
            color = {element.color}
          />
        )
      }
    </ul>
  )
}

export default NumbersTable;
