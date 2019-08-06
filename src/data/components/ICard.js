import React, { Component } from 'react'
import Moment from 'react-moment';

class ICard extends Component {
  render() {
    const {lastName, firstName, gender, height, birth, picture} = this.props;
    return (
      <article>
        <div>
          <img src={picture} alt={`${firstName}'s profile`}/>
        </div>
        <div>
          <p><strong>First name:</strong> {firstName}</p>
          <p><strong>Last name:</strong> {lastName}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Height:</strong> {`${height/100}m`}</p>
          <p><strong>Birth:</strong> <Moment date={birth} /></p>
        </div>
      </article>
    )
  }
}

export default ICard;
