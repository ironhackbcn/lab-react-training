import React, { Component } from 'react'

 const Rating = (props) => {
   let stars = '';
   for (let index = 0; index < 5; index++) {
     (Math.round(props.children) <= index) ? stars += '☆' : stars += '★';
   }

    return (
      <div>
        <p>{stars}</p>
      </div>
    )
  }

export default Rating;