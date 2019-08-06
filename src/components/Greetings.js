import React from 'react'

function Greetings(props) {
  return (
    <div className="greetings">
      {props.lang === 'de' ? <span>Hallo {props.children}</span> : null}
      {props.lang === 'en' ? <span>Hello {props.children}</span> : null}
      {props.lang === 'es' ? <span>Hola {props.children}</span> : null}
      {props.lang === 'fr' ? <span>Bonjour {props.children}</span> : null}
    </div>
  )
}

export default Greetings;
