import React, { Component } from 'react';

class Random extends Component {
  render() {
    const result =
      Math.floor(Math.random() * (this.props.max - this.props.min)) +
      this.props.min;
    return (
      <>
        <p>
          Random value between {this.props.min} and {this.props.max} => {result}
        </p>
      </>
    );
  }
}

export default Random;
