import React, { Component } from "react";
import "./Greetings.css";

// option 1
const Greetings = props => {
  return (
    <div className="Greetings">
      {props.lang === "de" ? (
        <p>Hallo {props.children}</p>
      ) : (
        <p>Bonjour {props.children}</p>
      )}
    </div>
  );
};

export default Greetings;
