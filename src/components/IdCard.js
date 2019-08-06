import React from 'react'

function IdCard(props) {
    return (
        <ul>
            <li>First Name: {props.name}</li>
            <li>Last Name: {props.surname}</li>
            <li>Gender: {props.gender}</li>
            <li>Height: {props.height}</li>
            <li>Birth: {props.birth.toString()}</li>
            <li><img src={props.imageurl} alt= "profile from idCard"/></li>
        </ul>
    )
}
export default IdCard;