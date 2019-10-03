import React, { Component } from "react";

class Greetings extends Component {
  render() {
    const hello = () => {
      if (this.props.lang === "de") {
        return "Hallo";
      } else if (this.props.lang === "fr") {
        return "Bonjour";
      }
    };
    console.log(this.props);
    return (
      <div className="greetings-content">
        <h4>{` ${hello()} ${this.props.children}`}</h4>
      </div>
    );
  }
}

export default Greetings;
