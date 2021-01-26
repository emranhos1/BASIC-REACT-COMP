import React, { Component } from "react";

class ConditionalReturn extends Component{
 
    constructor (){
        super()
        this.state={
            isLogin: false
        }
    }

    changeStateLogin(args){
        this.setState({isLogin: args})
        //this.getAlert()
    }
    
    getAlert(){
        alert(this.state.isLogin)
    }

    render() {
        if(this.state.isLogin === true){
            return(
                <div>
                    <h6>From Conditional Return</h6>
                    <button className="btn btn-danger" onClick={this.changeStateLogin.bind(this, false)}>Logout</button>
                </div>
            )
        } else {
            return(
                <div>
                    <h6>From Conditional Return</h6>
                    <button className="btn btn-primary"onClick={this.changeStateLogin.bind(this, true)}>Login</button>
                </div>
            )
        }
    }
}

export default ConditionalReturn