import React, { Component } from 'react'

export default class Rating extends Component {

    printStars(number) {
        number = Math.round(number)
        let string = ""
        for (let i = 0; i < number; i++) {
            string += "★"
        }
        for (let i = 0; i < 5 - number; i++) {
            string += "☆"
        }
        return string
    }

    render() {
        return (
            <div>
                {
                    <h2>{this.printStars(this.props.children)}</h2>
                }
            </div>
        )
    }
}
