import React, { Component } from 'react'

export default class BoxColor extends Component {

    toHexadecimal(number) {
        const hex = number.toString(16)
        if (hex.toString().length < 2) {
            return `${hex}${hex}`
        }
        return `${hex}`
    }

    bgcolor = {
        backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`
    }

    render() {

        return (
            <div style={this.bgcolor}>
                <h2>rgb({this.props.r},{this.props.g},{this.props.b})</h2>
                <h2>#{this.toHexadecimal(this.props.r)}{this.toHexadecimal(this.props.g)}{this.toHexadecimal(this.props.b)}</h2>
            </div>
        )
    }
}
