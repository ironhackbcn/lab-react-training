import React, { Component } from 'react';
import './Greetings.css';

class Random extends Component {
  render() {
    const { min, max } = this.props;
    const numberValue = Math.floor(Math.random() * (max - min)) + min;
    return (
      <div className="box">
        random value between {min} and {max} => {numberValue}
      </div>
    );
  }
}

export default Random;
