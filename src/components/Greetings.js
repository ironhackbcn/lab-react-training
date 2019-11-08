import React from 'react'

const Greetings = ({lang, children}) => {
    let greet = ""
    switch (lang) {
        case "en":
                greet = "Hello"
            break;
        case "fr":
                greet = "Bonjour"
            break;
        case "es":
                greet = "Hola"
            break;
         case "de":
                greet = "Hallo"
            break;
        default:
            break;
    }
    return (
        <p>
        {""+greet+' '+children}
        </p>
    )
}

export default Greetings

