import React, { Component } from 'react';
import './css/Greeting.css';

class Greeting extends Component {
  render() {
    let greet = '';
    const { lang, children } = this.props;
    switch (lang) {
      case 'es':
        greet = 'Hola';
        break;
      case 'fr':
        greet = 'Bonjour';
        break;
      case 'de':
        greet = 'Hallo';
        break;
      case 'en':
        greet = 'Hello';
        break;
      default:
        greet = 'Yep';
        break;
    }
    return (
      <div className="App-Boxed">
        <h2>
          {greet} {children}
        </h2>
      </div>
    );
  }
}

export default Greeting;