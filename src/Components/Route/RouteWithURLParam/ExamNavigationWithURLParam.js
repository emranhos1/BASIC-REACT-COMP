import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class ExamNavigationWithURLParam extends Component {
    render() {
        return (
            <div className='col-md-12'>
                <ul className='navbar navbar-dark bg-dark'>
                    <NavLink exact activeStyle={{color: 'white'}} to='/'>Home</NavLink>
                    <NavLink exact activeStyle={{color: 'white'}} to='/about'>About</NavLink>
                    <NavLink exact activeStyle={{color: 'white'}} to='/contactParam'>Contact</NavLink>
                    <NavLink exact activeStyle={{color: 'white'}} to='/portfolioParam'>Portfolio</NavLink>
                </ul>
            </div>
        );
    }
}

export default ExamNavigationWithURLParam;