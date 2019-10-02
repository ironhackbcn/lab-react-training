import React from 'react';
import './IdCard.css';

class IdCard extends React.Component {
  render() {
    return (
      <div class="id-card" >
        <img src={this.props.picture} alt="someone" class="avatar" />
        <div class="id-data">
          <p><b>First name: </b>{this.props.firstName}</p>
          <p><b>Last name: </b>{this.props.lastName}</p>
          <p><b>Gender: </b>{this.props.gender}</p>
          <p><b>Height: </b>{this.props.height}</p>
          <p><b>Birth: </b>{this.props.birth}</p>
        </div>
      </div>
    );
  }
}

export default IdCard;
