import React from 'react'

function Rating(props) {
  const value = Math.round(props.children);

  const star = (rates) => {
    let filled = '★';
    let empty = '☆';
    let stars = new Array(5);

    for (let i = 0; i < 5; i++) {
      i < rates ? stars[i] = filled : stars[i] = empty;
    }
    return stars.join('')
  }

  return (
    <div>
      {star(value)}
    </div>
  )
}

export default Rating