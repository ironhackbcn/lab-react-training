import React from "react";
import "../css/idCard.css";

function IdCard(props){
    return(
        <div className="id-card">
            <ul>
                <li>lastName: {props.lastName}</li>
                <li>firstName: {props.firstName}</li>
                <li>gender: {props.gender}</li>
                <li>height: {props.height}</li>
                <li>birth: {props.birth}</li>
                <li>picture: {props.picture}</li>
            </ul>
        </div>
    );
}

export default IdCard;


