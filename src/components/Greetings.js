import React from 'react'

function Greetings(props) {
    let makeWords = (lang) => {
        let result = ''
       if(lang === "de" ) {
           result = "Hallo"
       } else if(lang==="en"){
           result = "Hello"
       } else if (lang==="es"){
           result = "Hola"
       } else if(lang==="fr"){
           result = "Bonjour"
       }
       return result;
    }
    return (

        <div>
            <p>{makeWords(props.lang)} {props.children}</p>
            
        </div>
    )
}
export default Greetings;