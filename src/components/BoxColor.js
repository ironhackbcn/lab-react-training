import React, { Component } from 'react';

class BoxColor extends Component {
  render() {
    const { r, g, b } = this.props;
    const color = `rgb(${r}, ${g}, ${b})`;
    const style = {
      backgroundColor: color,
      border: '1px solid black',
      heigth: '20px',
      width: '500px'
    };
    console.log(color);
    return <div style={style}>{color}</div>;
  }
}

export default BoxColor;
