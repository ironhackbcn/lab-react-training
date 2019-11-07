import React from 'react'
export const IdCard = (props) => {
    let birth= JSON.stringify(props.birth)
    return (
        <div>
                <img src={props.picture} alt=""></img>
                <p>{props.firstName}</p>
                <p>{props.lastName}</p>
                <p>{props.gender}</p>
                <p>{props.height}</p>
                <p>{birth}</p>

            
        </div>
    )
}
