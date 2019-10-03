import React, { Component } from "react";

class IdCard extends Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;

    return (
      <div>
        <img src={picture} alt="Photography" />
        <p>
          <span>Last name:</span> {lastName}{" "}
        </p>
        <p>
          <span>First Name:</span> {firstName}{" "}
        </p>
        <p>
          <span>Gender:</span> {gender}{" "}
        </p>
        <p>
          <span>height:</span> {height}cm{" "}
        </p>
        <p>
          <span>birth:</span> {birth}{" "}
        </p>
      </div>
    );
  }
}

export default IdCard;
