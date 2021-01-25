import React, { Component } from "react";

class ClassStateWithVar extends Component {

    constructor (){
        super()
        var obj = {
            msg: "This message comes From Class State",
            name: "Md. Emran Hossain",
            //age: "31", 
            //or we can use array
            age:["31", "21", "33"],
            language:{
                BN: "Bangla",
                EN: "English",
                AR: "Arabic"
            }
        }
        this.state=obj
    }

    render() {
        return(
            <div style={{backgroundColor: "greenyellow"}}>
                <h6>{this.state.msg}</h6>
                <h6> My Name : {this.state.name} & My Age is : {this.state.age[0]}</h6>
                <h6>My Langeuage is : {this.state.language.BN}</h6>
            </div>
        )
    }
}

export default ClassStateWithVar