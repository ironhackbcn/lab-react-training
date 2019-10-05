import React from "react";
import "../css/Greetings.css";

function Greetings(props){
    return(
        <div className="greetings">
            <p>
                {props.greeting(props.lang)} {props.children}
            </p>
        </div>
    );
}

export default Greetings;


