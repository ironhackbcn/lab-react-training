import React, { Component } from 'react';

class LikeButton extends Component {
  state = {
    number:0,
  }

  addNumber = () => {
    let newNumber = this.state.number;
    this.setState({
      number: ++newNumber
    })
  };

  render() {
    const {number} = this.state;
    const colors = ['purple','blue','green','yellow','orange','red']; 
    return (
        <button style={{backgroundColor: colors[number%(colors.length)], color: 'white'}} onClick={this.addNumber}>
        {number} Likes
        </button>
    )
  }
}

export default LikeButton;