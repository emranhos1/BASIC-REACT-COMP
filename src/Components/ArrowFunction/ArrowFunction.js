import React from "react";

// function ArrowFunction() {
//     return(
//         <button>Regular Functoin Button</button>
//     );
// }

const ArrowAlert=(msg)=>{
    alert("msg : " + msg)
}

const ArrowFunction=(props)=>{
    return(
        <button className="btn btn-success" onClick={ArrowAlert.bind(this, props.msg)}>Arrow Functoin Button</button>
    )
}

export default ArrowFunction