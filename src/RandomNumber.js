import React, { Component } from 'react';
import { randomBytes } from 'crypto';

class RandomNumber extends Component {

  render() {
    const { min, max } = this.props;
    const random = Math.round(Math.random() * (max - min) + min);
    return (
      <div className="numbers">
          Random value between {min} and {max} => {random}
      </div>
    );
  }
}

export default RandomNumber;
