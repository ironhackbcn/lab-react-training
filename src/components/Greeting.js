import React from 'react'

const Greeting = (props) => {
  return (
    <div>
      <p>{props.children}</p>      
    </div>
  )
}

export default Greeting;