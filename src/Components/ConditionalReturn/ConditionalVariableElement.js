import React, { Component } from "react";

class ConditionalVariableElement extends Component{
 
    constructor (){
        super()
        this.state={
            isLogin: false,
            name: "Emon"
        }
    }

    changeStateLogin(args){
        this.setState({isLogin: args})
    }

    render() {
        return(
                this.state.isLogin ? 
                <div style={{backgroundColor: "green"}}>
                    <h6>From Conditional Variable Element</h6>
                    <button className="btn btn-danger" onClick={this.changeStateLogin.bind(this, false)}>Logout</button>
                </div>
                : 
                <div style={{backgroundColor: "yellow"}}>
                    <h6>From Conditional Variable Element</h6>
                    <button className="btn btn-primary"onClick={this.changeStateLogin.bind(this, true)}>Login</button>
                </div>
        )
    }
}

export default ConditionalVariableElement