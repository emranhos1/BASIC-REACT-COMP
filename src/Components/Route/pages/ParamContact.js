import React, { Component } from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class ParamContact extends Component {

    constructor() {
        super();
        this.state={
            data: "Md. Emran Hossain"
        }
    }
    render() {

        const param = "/portfolioParam/"+this.state.data;
        return (
            <div>
                <h1>Contact</h1>
                <Button><Link to={param}><b style={{color: "yellow"}}>Passing Name to Portfolio</b></Link></Button>
            </div>
        );
    }
}

export default ParamContact;