import React, { Component } from 'react';

class Dice extends Component {
  state = {
    initial: (Math.floor(Math.random() * (6 - 1 + 1)) + 1),
  }

  changeDice = () => {
    this.setState({
      initial: '-empty'
    })
    setTimeout(() => {
      this.setState({
        initial: (Math.floor(Math.random() * (6 - 1 + 1)) + 1)
      })
    }, 1000);
  };

  render() {
    return (
      <img onClick={this.changeDice} src={`/img/dice${this.state.initial}.png`} alt={'click to change'} width={150}/>
    )
  }
}

export default Dice;