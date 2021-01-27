import React, { Component } from "react";

class ForceUpdate extends Component{

    constructor(){
        super()
        this.refresh=this.refresh.bind(this)
    }

    refresh(){
        this.forceUpdate()
    }

    render(){
        return(
            <div style={{backgroundColor: "gray"}}>
                <h6>{Math.random()}</h6>
                <button className="btn btn-primary" onClick={this.refresh}>Refresh</button>
            </div>
        )
    }
}

export default ForceUpdate