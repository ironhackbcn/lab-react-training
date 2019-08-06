import React from 'react'

export default function IdCard(props) {
  return (
    <>
      {props.people.map((element, index) => {
        return (
          <div key={index}>
            <img src={element.picture} alt=""/>
            <p><strong>First name: </strong>{element.firstName}</p>
            <p><strong>Last name: </strong>{element.lastName}</p>
            <p><strong>Gender: </strong>{element.gender}</p>
            <p><strong>Height: </strong>{element.height/100}m</p>
            <p>{element.birth}</p>
          </div>
        )
      })}
    </>
  )
}

