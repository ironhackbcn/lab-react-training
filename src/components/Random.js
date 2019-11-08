import React from 'react'

const Random = ({min, max}) => {
    const randomNum = (num)=> Math.floor(Math.random() * (max - min) + min)
    return (
        <div>
            <p>Random value between {min} and {max} => {randomNum(max)}</p>
        </div>
    )
}

export default Random
