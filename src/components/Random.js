import React from 'react'

function Random(props) {
    return (
        <>
            {Math.round(Math.random()*(props.max-props.min)+props.min)}
        </>
    )
}
export default Random;