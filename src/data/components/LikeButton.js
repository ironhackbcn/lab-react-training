import React, { Component } from 'react'

class LikeButton extends Component {
  state = {
    likes: 0,  
    color: ['purple','blue','green','yellow','orange','red'],
    index: 0
  }

  addLikes = () => { 
    let newNLikes = this.state.likes;
    let newIndex = this.state.index;
    newIndex++
    if(newIndex === 6){
      newIndex = 0;
    }
    this.setState({ 
      likes: ++newNLikes,
      index: newIndex
    })
  }

  
  render() {

    const buttonStyle = {
      backgroundColor: this.state.color[this.state.index],
      color: 'white'
    }

    return (
      <button style={buttonStyle} onClick={this.addLikes}>{`${this.state.likes}Likes`}</button>
    )
  }
}

export default LikeButton;
