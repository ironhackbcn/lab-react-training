import React, { Component } from 'react'

class IdCard extends Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    const birthDate = birth.toDateString();
    return (
      <div className="card-container">
        <img className="card-image" src={picture} alt="a profile" />
        <div className="card-info">
          <p><span className="card-label">First Name:</span>{firstName}</p>
          <p><span className="card-label">Last Name:</span>{lastName}</p>
          <p><span className="card-label">Gender:</span>{gender}</p>
          <p><span className="card-label">Height:</span>{height}</p>
          <p><span className="card-label">Birth:</span>{birthDate}</p>
        </div>
      </div>
    )
  }
}

export default IdCard

