import React from 'react';

function BoxColor(props) {
  const colorrgb = [props.r, props.g, props.b];
  const bg = {
    backgroundColor: `rgb(${colorrgb})`,
  };
  return (
    <div class="card-section" style={bg}>
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
    </div>
  );
}

export default BoxColor;
