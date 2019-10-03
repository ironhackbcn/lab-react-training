import React, { Component } from 'react';
import './IdCard.css';

class Greetings extends Component {
  render() {
    const { lang, children } = this.props;

    switch (lang) {
      case 'de':
        return <p className="card-section">Hallo {children}</p>;
        break;
      case 'fr':
        return <p className="card-section">Bonjour {children}</p>;
        break;
      case 'es':
        return <p className="card-section">Hola {children}</p>;
        break;
      default:
        break;
    }
  }
}

export default Greetings;
