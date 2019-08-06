import React, { Component } from 'react'

const BoxColor = (props) => {
const a = `rgb(${props.r}, ${props.g}, ${props.b}`;
const divStyle =
{backgroundColor: a};

    return (
      <div className="pepe" style={divStyle}>
        
      </div>
    )
  
}

export default BoxColor;