import React from 'react'

export default function Greetings(props) {
  return (
    <>
      {props.gree.map((element, index) => {
        return (
          <div key={index}>
            {element.lang === 'de' &&
              <p>Hallo {element.name}</p>
            }
            {element.lang === 'fr' &&
              <p>Bonjour {element.name}</p>
            }
            {element.lang === 'en' &&
              <p>Hello {element.name}</p>
            }
            {element.lang === 'es' &&
              <p>Hola {element.name}</p>
            }
          </div>
        )
      })}
    </>
  )
}