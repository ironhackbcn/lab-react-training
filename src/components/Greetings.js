import React, { Component } from "react";

class Greetings extends Component {
  render() {
    return (
      <div>
        {this.props.lang === "en" ? (
          <span>Hello {this.props.children}</span>
        ) : null}
        {this.props.lang === "es" ? (
          <span>Hola {this.props.children}</span>
        ) : null}
        {this.props.lang === "de" ? (
          <span>Hallo {this.props.children}</span>
        ) : null}
        {this.props.lang === "fr" ? (
          <span>Bonjour {this.props.children}</span>
        ) : null}
      </div>
    );
  }
}
export default Greetings;
