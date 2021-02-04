import React, { Component } from "react";

class ClassProps extends Component {
    render(){
        return(
            <div>
                <h6> This is : {this.props.name} - Age is : {this.props.age == null || "" ? "Not Given" : this.props.age} || From Class Props</h6>
            </div>
        )
    }
}

export default ClassProps