import React, { Component } from 'react';
import './IdCard.css';

class IdCard extends Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    const birthDate = birth.toString();
    return (
      <div className="IdCard">
        <div className="IdCard-img-wrapper">
          <img src={picture} alt="" />
        </div>
        <div className="IdCard-info">
          <p>
            <span>First Name: </span> {firstName}
          </p>
          <p>
            <span>Last Name:</span> {lastName}
          </p>
          <p>
            <span>Gender:</span> {gender}
          </p>
          <p>
            <span>Height:</span> {height}
          </p>
          <p>
            <span>Birth:</span> {birthDate}
          </p>
        </div>
      </div>
    );
  }
}
export default IdCard;
