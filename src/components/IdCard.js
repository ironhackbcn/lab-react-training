import React from "react";
import "../css/IdCard.css";

function IdCard(props){
    return(
        <div className="id-card">
            <div><img src={props.picture} alt="img-id-card"></img></div>
            <div>
                <ul>
                    <li><span>First name: </span> {props.firstName}</li>
                    <li><span>Last name: </span> {props.lastName}</li>
                    <li><span>Gender: </span> {props.gender}</li>
                    <li><span>Height: </span> {props.height}</li>
                    <li><span>Birth: </span>birth: {props.birth}</li>
                </ul>
            </div>
        </div>
    );
}

export default IdCard;