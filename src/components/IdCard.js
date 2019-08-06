import React from 'react'

function IdCard(props) {
  return (
    <div className="id-card">
      <img src={props.picture} alt={props.firstName}/>
      <article>
        <p>First name: <span>{props.firstName}</span></p>
        <p>Last name: <span>{props.lastName}</span></p>
        <p>Gender: <span>{props.gender}</span></p>
        <p>Heigth: <span>{props.height}</span></p>
        <p>Birth: <span>{props.birth.toLocaleDateString()}</span></p>
      </article>
    </div>
  )
}

export default IdCard;
