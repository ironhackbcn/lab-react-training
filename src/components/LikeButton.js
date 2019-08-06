import React, { Component } from 'react'

 class LikeButton extends Component {
   state = {
     number: 0
   }

  like = () => {
    let num = this.state.number;
    this.setState({
      number: ++num 
    })
      console.log(num)
  };

  render() {
    return (
        <button onClick={this.like} > {this.state.number} Likes</button>
    )
  }
};

export default LikeButton