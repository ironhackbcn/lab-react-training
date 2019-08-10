import React, { Component } from 'react'

class LikeButton extends Component {
  state = {
    number: 0,
    text: 'Likes'
  }

  modifyNumber = (sum) => {
    let newNumber = this.state.number
    this.setState({
      number: newNumber + sum
    })
  }

  render() {
    return (
      <>
        <button className='button-counter' children={this.state.number + '\t' + this.state.text} onClick={() => { this.modifyNumber(1) }}></button>
      </>
    )
  }
}

export default LikeButton
