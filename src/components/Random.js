import React from "react";
import "../css/Random.css";
import { generateRandom } from "../helpers/index";


function Random(props){
    const { min, max } = props;
    const random = generateRandom(min, max);
    return(
        <div className='marc'> 
            <p>Random value between {props.min} and {props.max} => {random}</p>
        </div>
    );
}

export default Random;