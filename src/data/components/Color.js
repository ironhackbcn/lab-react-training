import React from 'react'

export const Color = (props) => {
   
 const divStyle={
     backgroundColor : `rgb(${props.r}, ${props.g}, ${props.b})`


 }

    return (
        <div style={divStyle}>
        <h2> {divStyle.backgroundColor}</h2>
        </div>
    )
}