import React, { Component } from 'react';

class Greetings extends Component {
  render() {
    const lang = this.props.lang;

    if (lang === 'de') {
      return (
        <div class="greeting-box">
          <p>Hallo {this.props.children}</p>
        </div>
      );
    }

    if (lang === 'es') {
      return (
        <div class="greeting-box">
          <p>Hola {this.props.children}</p>
        </div>
      );
    }
  }
}

export default Greetings;
