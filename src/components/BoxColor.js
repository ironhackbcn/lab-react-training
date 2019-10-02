import React from 'react'

export default function BoxColor(props) {
  return (
    <>
      {props.boxcolorarray.map((color, index) => {
        return (
          <div key={index}>
            <p>rgb({color.r},{color.g},{color.b})</p>
          </div>
        )
      })}
    </>
  )
}
