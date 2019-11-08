import React from 'react'

export const Grettings = (props) => {

    const lang={
        de:"Hallo",
        en:"Hi",
        es:"hola",
        fr:'Bonjoour'
    }

    return (
        <div>
                <h1>{lang[props.lang]} {props.children}</h1>
        </div>
    )
}
