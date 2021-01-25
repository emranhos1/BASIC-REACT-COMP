import React, { Component } from "react";

class SetState extends Component{
 
    constructor (){
        super()
        this.state={
            name: "Md. Emran Hossain"
        }
    }

    changeName(args){
        this.setState({name: args})
    }
    render() {
        return(
            <div style={{backgroundColor: "gray"}}>
                <h6> My Name : {this.state.name} </h6>
                <button className="btn btn-danger" onClick={this.changeName.bind(this, "Emon")}>Change Name</button>
            </div>
        )
    }
}

export default SetState