import React from 'react'

export default function Random(props) {
  return (
    <>
    {props.randomarray.map((elems, index) => {
      return (
        <div key={index}>
          <p>Random value between {elems.min} and {elems.max} => {Math.floor((Math.random()*(elems.max-elems.min) + elems.min))}</p>
        </div>
      )
    })}
    </>
  )
}
