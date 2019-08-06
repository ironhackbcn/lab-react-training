import React, { Component } from 'react'

 class ClickablePicture extends Component {
  state = {
     pictureClicked: this.props.img
   }

  picture = () => {
    let picture = (this.state.pictureClicked === this.props.img) ? this.props.imgClicked : this.props.img;
    this.setState({
      pictureClicked: picture 
    })

  };

  render() {
    return (
        <img onClick={this.picture} src={this.state.pictureClicked} alt=""/>
    )
  }
};


export default ClickablePicture;
