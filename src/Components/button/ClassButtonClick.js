import React, { Component } from "react";

class ClassButtonClick extends Component {

    btnClicked(){
        alert("Class Button Clicked")
    }

    render(){
        return(
            <dev>
                {/* For Class component it must called with 'this' keyword */}
                <button onClick={this.btnClicked} className='btn btn-primary'>ClassButtonClick</button> 
                
                {/* if function called with '()' this, function will called before page load */}
                {/* <button onClick={this.btnClicked()}>ClassButtonClick</button>  */}
            </dev>
        )
    }
}

export default ClassButtonClick