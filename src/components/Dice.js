import React, { Component } from 'react'

export default class Dice extends Component {

    state = {
        diceNum: `/img/dice${Math.floor(Math.random() * 6)}.png`
    }

    RollDice() {
        setTimeout(() => {

            this.setState({
                diceNum: `/img/dice${Math.floor(Math.random() * 5 + 1)}.png`
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <img height="100" onClick={() => this.RollDice()} src={this.state.diceNum} />
            </div>
        )
    }
}
