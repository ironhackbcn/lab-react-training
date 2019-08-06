import React from 'react'

export default function Rating(props) {
  const intRating = Math.round(props.children)
  
  const stars = (rating) =>{

    let starFilled = '★';
    let starEmpty = '☆';
    let starsArr = new Array(5);
    for(let i = 0; i < 5; i++){
      if(i < rating){
        starsArr[i] = starFilled;
      }else{
        starsArr[i] = starEmpty;
      }
    }
    
    return starsArr.join('')    
  } 
  return (
    <div>
      {stars(intRating)}
    </div>
  )
}
