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
                    <h6>From Conditional Return <button className="btn btn-danger m-5" onClick={this.changeStateLogin.bind(this, false)}>Logout</button></h6>
                </div>
            )
        } else {
            return(
                <div>
                    <h6>From Conditional Return <button className="btn btn-primary m-5"onClick={this.changeStateLogin.bind(this, true)}>Login</button></h6>
                </div>
            )
        }
    }
}

export default ConditionalReturn