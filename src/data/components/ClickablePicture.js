import React, { Component } from 'react'

class ClickablePicture extends Component {
  state = { isClicked: false}
  
  changePicture = () => {
    this.setState({isClicked: true});
  }
  changeClickedPicture = () => {
    this.setState({isClicked: false});
  }
  
  render() {
    const {img, imgClicked} = this.props;
    const isClicked = this.state.isClicked;
    let picture;

    if (isClicked) {
      picture = <img onClick={this.changeClickedPicture} src={imgClicked} alt="profile"/>;
    } else {
      picture = <img onClick={this.changePicture} src={img} alt="profile"/>;
    }

    return (
      <div>
        {picture}
      </div>
    )
  }
}

export default ClickablePicture;
