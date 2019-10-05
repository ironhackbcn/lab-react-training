import React from "react";
import "../css/greetings.css";

function Greetings(props){
    return(
        <div className="greetings">
            <p>
                {props.greeting(props.lang)} {props.children}
            </p>
            {/* <ul>
                <li>{props.lang}</li>
                <li>Children: {props.children}</li>
            </ul> */}
        </div>
    );
}

export default Greetings;


