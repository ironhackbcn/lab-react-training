import React, { Component } from 'react'

export default class Dice extends Component {
  constructor() {
    super();
    this.state = {
      img: '/img/dice' + (Math.floor(Math.random() * 6) + 1) + '.png'
    }
  }

  changePicture = () => {
    this.setState({
      img: '/img/dice-empty.png'
    })
    setTimeout(() => {
      this.setState({
        img: '/img/dice' + (Math.floor(Math.random() * 6) + 1) + '.png'
      })
    }, 1000)
  }

  render() {
    return (
      <img src={this.state.img} alt="" onClick={this.changePicture} style={{width: 100+"px"}} />
    )
  }
}
