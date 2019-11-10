import React, { Component } from 'react'

export default class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      num: 0,
      title: "Likes",
      color: ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    }
  }

  changeButton = () => {
    this.setState({
      num: this.state.num + 1
    })
  }

  render() {
    return (
      <button style={{
          backgroundColor: this.state.color[this.state.num],
          border: 0+"px",
          borderRadius: 5+"px",
          padding: 10+"px",
          color: "white"
        }} onClick={this.changeButton}>{this.state.num} {this.state.title}
      </button>
    );
  }
}
