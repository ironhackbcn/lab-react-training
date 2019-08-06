import React from 'react'

function BoxColor(props) {
    let color = {
        r: props.r,
        g: props.g,
        b: props.b,
    }

    let colorBox= { 
        backgroundColor: `rgb(${color.r},${color.g},${color.b})`
    }
    return (
        <div className="box" style={colorBox}> </div>
    )
}

export default BoxColor;