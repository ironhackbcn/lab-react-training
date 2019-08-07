
import React from 'react'

export default function IdCard(props) {
  return (
    <div>
      <p>firstName: {props.firstName}</p>
      <p>lastName: {props.lastName}</p>
      <p>gender: {props.gender}</p>
      <p>height: {props.height}</p>
      <p>birth: {props.firstbirth}</p>
      <p>picture: {props.picture}</p>

    </div>
  )
}
