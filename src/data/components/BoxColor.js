import React, { Component } from 'react'

class BoxColor extends Component {

  render() {
    const {r, g, b} = this.props;

    const rgbToHex = (rgb) =>{
      let hex = Number(rgb).toString(16);
      if(hex.length < 2){
        hex = '0' + hex;
      }
      return hex;
    }
    const red = rgbToHex(r);
    const green = rgbToHex(g);
    const blue = rgbToHex(b);
    const color = `rgb(${r},${g},${b})`;
    const divStyle ={ 
      backgroundColor: color
    }
    
    return (
      <div style={divStyle}>
        <p>{color}</p>
        <p>{`#${red}${green}${blue}`}</p>
      </div>
    )
  }
}

export default BoxColor;
