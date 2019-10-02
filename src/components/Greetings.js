import React from 'react';
import '../css/greetings.css';

const Greetings = (props) => {
  const { lang, children } = props;
  let hello = '';

  switch (lang) {
    case 'de':
      hello = 'Hallo';
      break;
    case 'en':
      hello = 'Hello';
      break;
    case 'fr':
      hello = 'Bonjour';
      break;
    case 'es':
      hello = 'Hola';
      break;
    default:
      hello = 'Hola';
  }

  return (
    <div className="greetings">
      {hello} {children}
    </div>
  );
};
export default Greetings;
