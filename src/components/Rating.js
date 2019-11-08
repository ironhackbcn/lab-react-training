import React from 'react'

const Rating = ({children}, props) => {
    console.log(props)
    const roundNum = Math.round(children);

    const fullStars = (roundNum) =>{
        let aux = ''
        for(let i=0; i < roundNum+1; i++){
            aux = aux + '★'
        }
        return aux
    }
    const emptyStars = (roundNum) =>{
        let aux=''
        for(let i=0; i < 5-roundNum; i++){
            aux = aux+'☆'
        }
        return aux
    }

    return (
        <div>
            <p>{fullStars(roundNum)}{emptyStars(roundNum)}</p>
        </div>
    )
}

export default Rating
