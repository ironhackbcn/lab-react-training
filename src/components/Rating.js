import React from 'react'

const Rating = (props) => {
  let string = '';
  for (let i = 0; i < Math.round(props.children); i++) {
    string += '★';
  }

  return (
    <div className="Rating">
      <pre>{string.padEnd(5, "☆")}</pre>
    </div>
  )
}

export default Rating;
