import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class ExamNavigation extends Component {
    render() {
        return (
            <div className='col-md-12'>
                <ul className='navbar navbar-dark bg-dark'>
                    {/*<Link to='/'>Home</Link>*/}
                    {/*<Link to='/about'>About</Link>*/}
                    {/*<Link to='/contact'>Contact</Link>*/}
                    {/*<Link to='/portfolio'>Portfolio</Link>*/}

                    <NavLink exact activeStyle={{color: 'white'}} to='/'>Home</NavLink>
                    <NavLink exact activeStyle={{color: 'white'}} to='/about'>About</NavLink>
                    <NavLink exact activeStyle={{color: 'white'}} to='/contact'>Contact</NavLink>
                    <NavLink exact activeStyle={{color: 'white'}} to='/portfolio'>Portfolio</NavLink>
                </ul>
            </div>
        );
    }
}

export default ExamNavigation;