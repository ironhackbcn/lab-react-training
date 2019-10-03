import React from 'react';
import './IdCard.css';


const IdCard = (props) => {
    return (    
      <div className="IdCard">
          <div className="member-img">
            <img src={props.picture} />
          </div>
          <div className="member-info">
            <p><span>First name:</span> {props.firstName}</p>
            <p><span>Last name:</span> {props.lastName}</p>
            <p><span>Gender:</span> {props.gender}</p>
            <p><span>Height:</span> {props.height}</p>
            <p><span>Birth:</span> {props.birth}</p>  
          </div>      
        
       </div>
    );
};



export default IdCard;