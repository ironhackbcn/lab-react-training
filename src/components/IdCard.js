import React from 'react';
import '../css/idcard.css';

const IdCard = (props) => {
  return (
    <div className="card">
      <div>
        <img src={props.picture} alt="" />
      </div>
      <div className="description">
        <div>
          <span className="title">First Name:</span> {props.firstName}
        </div>
        <div>
          <span className="title">Gender:</span> {props.gender}
        </div>
        <div>
          <span className="title">Last Name:</span> {props.lastName}
        </div>
        <div>
          <span className="title">Height:</span> {props.height}
        </div>
        <div>
          <span className="title">Birth:</span> {props.birth.toString()}
        </div>
      </div>
    </div>
  );
};
export default IdCard;
