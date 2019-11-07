import React from 'react'

export const Greetings = (props) => {
  const greets = [
    {
      lang: 'de',
      greet: 'Hallo'
    },
    {
      lang: 'en',
      greet: 'Hello'
    },
    {
      lang: 'es',
      greet: 'Hola'
    },
    {
      lang: 'fr',
      greet: 'Bonjour'
    }
  ];

  let getGreeting = lang => greets.find(language => language.lang === lang);
  const localGreeting = getGreeting(props.lang);

  return (
    <div className="box">
      {localGreeting.greet} {props.children}
    </div>
  )
}
