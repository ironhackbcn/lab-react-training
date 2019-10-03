import React from 'react';
import './BoxColor.css';

function BoxColor(props) {
  const style = [props.r, props.g, props.b];
  const bg = {
    backgroundColor: `rgb(${style})`
  }

  return (
    <div class="box-color" style={bg}>
      <p>rgb({props.r}, {props.g}, {props.b})</p>
    </div >
  );
}

export default BoxColor;