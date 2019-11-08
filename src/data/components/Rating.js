import React from 'react'

export const Rating = (props) => {
        let stars = '';
        for (let i=0; i < 5; i++) {
           (Math.round(props.children) <= i) ? stars += '☆' : stars += '★'
        }
        return (
            <div>
                <p>{stars}</p>
            </div>
        )
    }

