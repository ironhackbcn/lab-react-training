import React from 'react';
import './Greetings.css';

function Greetings(props) {
  switch (props.lang) {
    case 'de':
      return <p className="box">Hallo {props.children}</p>;
    case 'en':
      return <p className="box">Hello {props.children}</p>;
    case 'es':
      return <p className="box">Hola {props.children}</p>;
    case 'fr':
      return <p className="box">Bonjour {props.children}</p>;
    default:
      break;
  }
}

export default Greetings;
