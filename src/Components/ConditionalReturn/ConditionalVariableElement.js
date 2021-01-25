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
                <h6>From Conditional Variable Element <button className="btn btn-danger m-5" onClick={this.changeStateLogin.bind(this, false)}>Logout</button></h6>
                : 
                <h6>From Conditional Variable Element <button className="btn btn-primary m-5"onClick={this.changeStateLogin.bind(this, true)}>Login</button></h6>
        )
    }
}

export default ConditionalVariableElement