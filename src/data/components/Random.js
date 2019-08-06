import React from 'react'

function Random({min, max}) {

  const randomNumber = Math.round(Math.random()*(max-min)+min);

  return (
    <div>
      <p>{`Random value between ${min} and ${max} => ${randomNumber}`}</p>
    </div>
  )
}

export default Random;
