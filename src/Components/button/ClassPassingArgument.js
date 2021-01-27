import React, { Component } from "react";

class ClassPassingArgument extends Component {

    btnClicked(params){
        alert("Class Button Clicked and " + params)
    }

    render(){
        return(
            <dev>
                <button onClick={this.btnClicked.bind(this, this.props.value)} className='btn btn-success'>ClassPassingArgument</button> 
            </dev>
        )
    }
}

export default ClassPassingArgument