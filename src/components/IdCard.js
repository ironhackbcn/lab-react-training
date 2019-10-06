import React, { Component } from 'react';
import './css/IdCard.css';


class IdCard extends Component {
  render() {
    const { firstName, lastName, gender, height, birth, picture } = this.props;

    return (
      <div className="App-IdCard">
        <img src={picture} alt="Photography" />
        <div className="App-IdCard-text">
          <p>
            <span>First Name:</span> {firstName}{' '}
          </p>
          <p>
            <span>Last name:</span> {lastName}{' '}
          </p>
          <p>
            <span>Gender:</span> {gender}{' '}
          </p>
          <p>
            <span>Height:</span> {height} cm{' '}
          </p>
          <p>
            <span>Birth:</span> {birth}{' '}
          </p>
        </div>
      </div>
    );
  }
}

export default IdCard;
