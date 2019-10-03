import React, { Component } from "react";
import './Greetings.css';

class Greetings extends Component {
  render() {
    let greet = "";
    const { lang, children } = this.props;
    switch (lang) {
      case "es":
        greet = "Hola";
        break;
      case "fr":
        greet = "Bonjour";
        break;
      case "de":
        greet = "Hallo";
        break;
      case "en":
        greet = "Hello";
        break;
      default:
        greet = "Hey";
        break;
    }
    return (
      <div className="App-Bounder">
        <h2>
          {greet} {children}
        </h2>
      </div>
    );
  }
}

export default Greetings;
