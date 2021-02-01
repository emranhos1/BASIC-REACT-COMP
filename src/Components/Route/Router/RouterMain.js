import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

class RouterMain extends Component {
    render() {
        return (
            <div className='col-md-12'>
                <Router>
                        <ul className='navbar navbar-dark bg-dark'>
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/contact'>Contact</Link>
                            <Link to='/portfolio'>Portfolio</Link>
                        </ul>

                        <Route exact path="/"          component={Home}/>
                        <Route exact path="/about"     component={About}/>
                        <Route exact path="/contact"   component={Contact}/>
                        <Route exact path="/portfolio" component={Portfolio}/>
                        
                </Router>
            </div>
        );
    }
}

export default RouterMain;