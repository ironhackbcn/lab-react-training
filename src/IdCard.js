import React, { Component } from 'react';

class IdCard extends Component {

  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    const birthYear = birth.toString();
    console.log(birthYear);
    return (
        <div className="card">
            <h3>{firstName}</h3>
            <p>{lastName}</p>
            <p>{gender}</p>
            <p>{height}</p>
            <p>{birthYear}</p>
            <img src={picture}></img>
        </div>

    );
  }
}

export default IdCard;
