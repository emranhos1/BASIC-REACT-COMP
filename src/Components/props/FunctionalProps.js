import { React } from "react";

function FunctionalProps(props){
    return(
        <div>
            <h6> This is : {props.name} === Age is : {props.age == null || "" ? "Not Given" : props.age} || From Functional Props</h6>
        </div>
    );
}

export default FunctionalProps