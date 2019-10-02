import React from 'react';
import './BoxColor.css';

function BoxColor(props) {
  const divStyle = {
    // backgroundColor: "rgb('props.r',' props.g', 'props.b')",
    backgroundColor: 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')',
  };
  return (
    <div className="Random center" style={divStyle}>
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
      <p>
        #{props.r.toString(16)}
        {props.g.toString(16)}
        {props.b.toString(16)}
      </p>
    </div>
  );
}

export default BoxColor;
