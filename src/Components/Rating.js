import React from 'react'

function Rating(props) {
  const numberStars = Math.round(props.children)
  const emptyStars = 5 - numberStars;
  const fs = '★';
  const es = '☆';

  return (
    <div>
      {fs.repeat(numberStars).concat(es.repeat(emptyStars))}
    </div>
  )
}

export default Rating;
