import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import NotFound from "../pages/NotFound";

class ExamRoute extends Component {
    render() {
        return (
            // when path not match Switch Route NotFound Page
            <Switch>
                <Route exact path="/"          component={Home}/>
                <Route exact path="/about"     component={About}/>
                <Route exact path="/contact"   component={Contact}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Route component={NotFound}/>
            </Switch>
        );
    }
}

export default ExamRoute;