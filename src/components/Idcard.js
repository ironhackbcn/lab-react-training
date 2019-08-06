import React, { Component } from 'react'

 const Idcard = (props) => { 
      
    return (
      <div>
        <p>{props.lastName}</p>
        <p>{props.firstName}</p>
        <p>{props.gender}</p>
        <p>{props.height}</p>
        <p>{props.birth}</p>
        <img src={props.picture} alt=""/>
      </div>
    )
  
}

export default Idcard;