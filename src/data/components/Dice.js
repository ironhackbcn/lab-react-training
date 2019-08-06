import React, { Component } from 'react'

class Dice extends Component {
  state = { 
    url: [
      '/img/dice1.png',
      '/img/dice2.png',
      '/img/dice3.png',
      '/img/dice4.png',
      '/img/dice5.png',
      '/img/dice6.png'
    ],
    isClicked: false
  }

  changePicture = () => {
    this.setState({isClicked: true});
  }
  changeClickedPicture = () => {
    this.setState({isClicked: false});   
  }

  
  render() {
    const {url} = this.state;
    const isClicked = this.state.isClicked;
    const RandomPicture = Math.round(Math.random()*url.length);
    let img;
    
    if(isClicked){
      // img = <img src={process.env.PUBLIC_URL + '/img/dice-empty.png'} alt="dice view"/>
      img = <img onClick={this.changeClickedPicture} src={process.env.PUBLIC_URL + url[RandomPicture]} alt="dice view"/>
      // setTimeout({
      //   img = <img onClick={this.changeClickedPicture} src={process.env.PUBLIC_URL + url[RandomPicture]} alt="dice view"/>
      // },1000);
    } else {
      img = <img onClick={this.changePicture} src={process.env.PUBLIC_URL + url[RandomPicture]} alt="dice view"/>
    }

    return (
      <div>
        {img}
      </div>
    )
  }
}

export default Dice;
