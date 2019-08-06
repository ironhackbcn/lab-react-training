import React from 'react'

function Greetings(props) {
  const languaje =() =>{
  if(props.lang === "de") {
    return 'Hallo'
  }
  else{
    return 'Bonjour'
  }
}
  return (
    <div>
      
      <p>{languaje()} {props.children}</p>

    </div>
  )
}


export default Greetings
