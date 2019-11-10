import React from 'react'

const type = (isStudent) => {
  return (isStudent === true) ? "Student" : "Teacher";
}

const FacebookProfile = (props) => {
  return (
    <div className="IdCard box">
      <img src={props.img} alt={props.firstName}></img>
      <ul className="right">
        <li><strong>First name</strong>: {props.firstName}</li>
        <li><strong>Last name</strong>: {props.lastName}</li>
        <li><strong>Country</strong>: {props.country}</li>
        <li><strong>Type</strong>: {type(props.isStudent)}</li>
      </ul>
    </div>
  )
}

export default FacebookProfile;
