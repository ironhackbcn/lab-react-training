import React from "react";

const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {
  console.log(birth);

  return (
    <div className="card">
      <div className="card-image">
        <img src={picture} alt="" />
      </div>
      <div className="card-info">
        <p>
          <strong>First Name:</strong> {firstName}
        </p>
        <p>
          <strong>Last name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong>
          {height * 0.01 + "m"}
        </p>
        <p>
          <strong>Birth:</strong> {birth.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
