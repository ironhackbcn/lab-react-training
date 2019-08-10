import React, { Component } from 'react'

class Random extends Component {
  render() {
    const { min, max } = this.props
    const randomValue = () => Math.round(Math.random() * (max - min) + min)
    return (
      <div min={min} max={max}>
        Random value between {min} and {max} => {randomValue()}
      </ div>
    )
  }
}

export default Random
