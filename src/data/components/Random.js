import React from 'react'

export const Random = (props) => {
    const result = Math.floor(Math.random()*(props.max - props.min)+props.min)

    return (
        <div>
            <p>Random value between {props.min} and {props.max} => {result}</p>
        </div>
    )
}
