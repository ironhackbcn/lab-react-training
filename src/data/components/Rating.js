import React from 'react'

function Rating({children}) {

  const value = Math.round(children);
  const ratingArray = new Array(5);
  const getRating = () => {
    for(let i=0; i<ratingArray.length; i++){
      if(i < value){
        ratingArray[i] = '★';
      } else{
        ratingArray[i] = '☆'
      }
    }
    return ratingArray.join('');
  }

  return (
    <div>
      <p>{getRating()}</p>
    </div>
  )
}
export default Rating;
