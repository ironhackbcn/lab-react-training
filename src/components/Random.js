import React, { Component } from "react";

class Random extends Component {
  render() {
    return (
      <div>
        Random value beetween {this.props.min} and {this.props.max} =>{" "}
        {Math.floor(Math.random() * (this.props.max - this.props.min + 1)) +
          this.props.min}
        ;
      </div>
    );
  }
}

export default Random;
