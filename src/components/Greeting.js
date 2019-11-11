import React, { Component } from 'react'

export default class Greetings extends Component {

    translate(language) {
        switch (language) {
            case "en":
                return "Helo "
                break;
            case "es":
                return "Hola "
                break;
            case "de":
                return "Hallo "
                break;
            case "fr":
                return "Bonjour "
                break;
        }
    }

    render() {
        return (
            <p>{this.translate(this.props.lang)}{this.props.children}</p>
        )
    }
}

