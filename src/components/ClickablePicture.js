import React, { Component } from 'react'

export default class ClickablePicture extends Component {

    state = {
        showGlasses: false
    }

    toggleShowGlasses() {
        this.setState({
            showGlasses: !this.state.showGlasses
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.showGlasses ?
                        <img onClick={() => this.toggleShowGlasses()} src={this.props.imgClicked} alt="" />
                        :
                        <img onClick={() => this.toggleShowGlasses()} src={this.props.img} alt="" />
                }
            </div>
        )
    }
}
