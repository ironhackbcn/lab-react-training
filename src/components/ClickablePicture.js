import React, { Component } from 'react'

export default class ClickablePicture extends Component {

  state = {
    img: this.props.img
  }

  changePicture = () => {
    (this.state.img === this.props.img) ? this.setState({ img: this.props.imgClicked }) : this.setState({ img: this.props.img })
  }

  render() {
    return (
      <img src ={this.state.img} alt = "" onClick = {this.changePicture}/>
    )
  }
}
