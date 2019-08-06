import React, { Component } from 'react'

class IdCard extends Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    const birthDate = birth.toDateString();
    return (
      <div className="card-container">
        <img src={picture} alt="a profile" />
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{gender}</p>
        <p>{height}</p>
        <p>{birthDate}</p>
      </div>
    )
  }
}

export default IdCard

