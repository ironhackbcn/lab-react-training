import React, { Component } from 'react';

class IdCard extends Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    const Birth = birth.toString();

    return (
      <div className=" card-section">
        <div>
          <img src={picture} alt="" />
        </div>

        <div>
          <h4> Last Name: {lastName}</h4>
          <p> First Name: {firstName}</p>
          <p> Gender: {gender}</p>
          <p> Height: {height}</p>
          <i> Birth: {Birth}</i>
        </div>
      </div>
    );
  }
}

export default IdCard;
