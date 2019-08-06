import React from 'react'

function IdCard(props) {
  return (
    <article>
      <img src={props.picture} alt={props.firstName}/>
      <p><b>First name</b>: {props.firstName}</p>
      <p><b>Last name</b>: {props.lastName}</p>
      <p><b>Gender</b>: {props.gender}</p>
      <p><b>Height</b>: {props.height}</p>
      <p><b>Birth</b>: {props.birth}</p>
    </article>
  )
}

export default IdCard;
