import React from 'react'

const BoxColor = ({r, g, b}) => {
    return (
        <div style={{height:50, width: 300, backgroundColor: `rgb(${r},${g},${b})`}}>
            <p>rgb({r},{g},{b})</p>
        </div>
    )
}

export default BoxColor
