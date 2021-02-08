import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import contactParam from '../pages/ParamContact';
import Home from '../pages/Home';
import portfolioParam from '../pages/ParamPortfolio';
import NotFound from "../pages/NotFound";

class ExamRouteWithURLParam extends Component {
    render() {
        return (
            // when path not match Switch Route NotFound Page
            <Switch>
                <Route exact path="/"                     component={Home}/>
                <Route exact path="/about"                component={About}/>
                <Route exact path="/contactParam"         component={contactParam}/>
                <Route exact path="/portfolioParam/:name" component={portfolioParam}/>
                <Route component={NotFound}/>
            </Switch>
        );
    }
}

export default ExamRouteWithURLParam;