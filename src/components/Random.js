import React, { Component } from 'react'

export default class Random extends Component {

    number = Math.floor(Math.random() * this.props.max);

    render() {
        return (
            <h3> Random value between {this.props.min} and {this.props.max} => {this.number}</h3>
        )
    }
}
