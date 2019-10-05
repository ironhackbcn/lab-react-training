import React from "react";
import { convertStringToHex } from '../helpers';

function BoxColor(props){
    const { r, g, b } = props;
    const hex = convertStringToHex(r,g,b);
    const result = {'background-color': convertStringToHex(r,g,b)};

    return(
        <div style={result}>
            <h1>rgb({r},{g},{b})</h1>
            <p>{hex}</p>
        </div>
    );
}

export default BoxColor;
