import React, { Component } from "react";

class ClassState extends Component {

    constructor (){
        super()
        this.state={
            msgSecond: "From Class State",
            msgFirst: "This Comes"
        }
    }

    render() {
        return(
            <h6>{this.state.msgFirst} {this.state.msgSecond}</h6>
        )
    }
}

export default ClassState