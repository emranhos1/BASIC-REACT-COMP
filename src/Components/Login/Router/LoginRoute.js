import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import NotFound from "../pages/NotFound";
import Login from '../pages/Login';

class LoginRoute extends Component {
    render() {
        return (
            // when path not match Switch Route NotFound Page
            <Switch>
                <Route exact path="/"          component={Home}/>
                <Route exact path="/about"     component={About}/>
                <Route exact path="/contact"   component={Contact}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Route exact path="/login"     component={Login}/>
                <Route component={NotFound}/>
            </Switch>
        );
    }
}

export default LoginRoute;