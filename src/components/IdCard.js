import React from 'react'

export default function IdCard(props) {

    const height = props.height / 100;


    const flex = {
        display: "flex",
        border: "1px solid black"
    }

    return (
        <div style={flex}>
            <img width="200" src={props.picture} />
            <div>
                <p><b>First name: </b> {props.lastName}</p>
                <p><b>Last name: </b> {props.firstName}</p>
                <p><b>Gender: </b> {props.gender}</p>
                <p><b>Heigth: </b> {height} m</p>
                <p><b>Birth: </b> {props.birth}</p>
            </div>
        </div>
    )
}
