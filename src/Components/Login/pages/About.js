import React, { Component } from 'react';
import { Redirect, UseHistory } from "react-router-dom";

class About extends Component {

    onClickEventHandler = () => {
        sessionStorage.clear();
    }

    render() {
        if (sessionStorage.getItem('username') == null && sessionStorage.getItem('password') == null){
            return (
                <Redirect to={'/login'} />
            )
        } else{
            return (
                <div>
                    <h1>About</h1>
                    <input type='button' value='Log out' onClick={this.onClickEventHandler}/>
                </div>
            );
        }
    }
}

export default About;