import React from 'react'

function Rating(props) {
  const star = Math.floor(props.child);

  // let rating = '';

  // switch (star) {
   
  //   case 0: 
  //   rating = '☆☆☆☆☆'; 
  //   break;
  //   case 1: 
  //   rating = '★☆☆☆☆'; 
  //   break;
  //   case 2: 
  //   rating = '★★☆☆☆'; 
  //   break;
  //   case 3: 
  //   rating = '★★★☆☆'; 
  //   break;
  //   case 4: 
  //   rating = '★★★★☆'; 
  //   break;
  //   case 5: 
  //   rating = '★★★★★'; 
  //   break;
  //   default: 
  //   break;
  // }
if(star === 1){
  return '☆☆☆☆☆'
}
  
  return (
    <div>
      <p>{star}</p>
    </div>
  )
}
export default Rating;