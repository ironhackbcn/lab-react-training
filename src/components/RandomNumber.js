import React, { Component } from "react";

class RandomNumber extends Component {
  render() {
    const { max, min } = this.props;

    return (
      <div>
        <h3>
          Random value between {min} and {max} =>{" "}
          {Math.floor(Math.random() * (max - min) + min)}
        </h3>
      </div>
    );
  }
}

export default RandomNumber;
