import React, { Component } from 'react';

class ClickablePicture extends Component {
  state = {
    src: this.props.img,
  }

  changePic = () => {
    const { src } = this.state;
    const { img, imgClicked } = this.props;
    let newSrc = (src === img) ? imgClicked : img;
    this.setState({
      src: newSrc
    })
  };

  render() {
    return (
      <img onClick={this.changePic} src={this.state.src} alt={'click to change'}/>
    )
  }
}

export default ClickablePicture;