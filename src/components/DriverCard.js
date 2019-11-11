import React, { Component } from 'react'
import Rating from "./Rating"

export default class DriverCard extends Component {

    flex = {
        display: "flex",
        alignItems: "center",
        backgroundColor: "lightblue"
    }

    render() {
        return (
            <div style={this.flex}>
                <img width="100" height="100" src={this.props.img} />
                <div>
                    <p><b>{this.props.name}</b></p>
                    <Rating>{this.props.rating}</Rating>
                    <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
                </div>
            </div>
        )
    }
}
