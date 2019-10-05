import React, { Component } from "react";

class BoxColor extends Component {
  render() {
    const divStyle = {
      background: `rgb(${this.props.r},${this.props.g},${this.props.b})`,
      width: `300px`,
      height: `50px`
    };
    return (
      <div style={divStyle}>
        rgb({this.props.r},{this.props.g},{this.props.b})
      </div>
    );
  }
}

export default BoxColor;
