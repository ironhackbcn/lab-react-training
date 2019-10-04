import React, { Component } from 'react';
import './Greetings.css';
class Greetings extends Component {
  render() {
    const { children } = this.props;
    const { lang } = this.props;
    let text;

    if (lang === 'de') {
      text = 'Guten Morgen';
    } else if (lang === 'en') {
      text = 'Hello';
    } else if (lang === 'es') {
      text = 'Hola';
    } else if (lang === 'fr') {
      text = 'Bonjour';
    }

    return (
      <div className="box">
        {text} {children}
      </div>
    );
  }
}

export default Greetings;
