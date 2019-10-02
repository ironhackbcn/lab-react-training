import React from 'react';
import './Greetings.css';

class Greetings extends React.Component {
  render() {
    const lang = this.props.lang;

    if (lang === "de") {
      return (
        <div class="greeting-box">
          <p>Hallo {this.props.children}</p>
        </div>
      );
    }

    if (lang === "fr") {
      return (
        <div class="greeting-box">
          <p>Bonjour {this.props.children}</p>
        </div>
      );
    }
  }
}



export default Greetings;