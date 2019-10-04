import React, { Component } from 'react';
import './IdCard.css';

class IdCard extends Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture, altPicture } = this.props;
    return (
      <div className="card">
        <div>
          {lastName}
          <img href={picture} alt={altPicture} />>
        </div>
        <div>
          <ul>
            <li>
              <strong> First Name:</strong>
              {lastName}
            </li>
            <li>
              <strong>Last Name:</strong>
              {firstName}
            </li>
            <li>
              <strong>Gender: </strong>
              {gender}
            </li>
            <li>
              <strong>Height: </strong>
              {height}
            </li>
            {/* <li>Birth:{birth}</li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default IdCard;
