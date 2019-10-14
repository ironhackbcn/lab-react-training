import React, { Component } from 'react';

class IdCard extends Component {
  render() {
    return (
      <div className="id-card">
        <div className="id-picture">
          <img src={this.props.picture} alt={this.props.firstName} />
        </div>
        <div className="id-text">
          <p>
            <b>First Name: </b>
            {this.props.firstName}
          </p>
          <p>
            <b>Last Name: </b>
            {this.props.lastName}
          </p>
          <p>
            <b>Gender: </b>
            {this.props.gender}
          </p>
          <p>
            <b>Height: </b>
            {this.props.height}
          </p>
          <p>
            <b>Birth: </b>
            {this.props.birth.toString()}
          </p>
        </div>
      </div>
    );
  }
}

export default IdCard;
