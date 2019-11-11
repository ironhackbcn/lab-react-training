import React, { Component } from 'react'

export default class LikeButton extends Component {


    state = {
        likes: 0,
        colors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    }

    bgColor = {
        backgroundColor: `${this.state.colors[this.state.likes % 6]}`
    }

    addLike() {
        this.setState({
            likes: this.state.likes + 1
        })
        console.log(this.state.colors[this.state.likes % 6])
    }

    render() {
        return (
            <button style={this.bgColor} onClick={() => this.addLike()}>{this.state.likes} Likes</button>
        )
    }
}
