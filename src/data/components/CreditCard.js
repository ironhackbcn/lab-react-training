import React from 'react'

export const CreditCard = (props) => {
    const divStyle={
        backgroundColor : props.bgColor,
        color : props.color,
        width: "30%",
        float: "left",
        margin: "10px"
   
    }

    const hide = props.number.replace(/\d(?=\d{4})/g, "*")
    return (
        <div style={divStyle}>
            <p>{props.type}</p>
            <h3>{hide}</h3>
            <p>{props.expirationMonth}</p>
            <p>{props.expirationYear}</p>
            <p>{props.bank}</p>
            <h5> {props.owner}</h5>
        </div>
    )
}
