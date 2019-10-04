import React, { Component } from 'react';
import './Greetings.css';
class BoxColor extends Component {
  render() {
    const { r, g, b } = this.props;
    const divStyle = {
      // backgoundColor: `${r}${g}${b}`,
      backgroundColor: `rgb(${r},${g},${b})`,
    };

    console.log(r, g, b);
    return (
      <div className="box" style={divStyle}>
        RGB ({r},{g},{b})
      </div>
    );
  }
}

export default BoxColor;
