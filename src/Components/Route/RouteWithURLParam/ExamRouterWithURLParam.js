import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ExamNavigationWithURLParam from "./ExamNavigationWithURLParam";
import ExamRouteWithURLParam from "./ExamRouteWithURLParam";

class ExamRouterWithURLParam extends Component {
    render() {
        return (
            <Router>
                <ExamNavigationWithURLParam/>
                <ExamRouteWithURLParam/>
            </Router>
        );
    }
}

export default ExamRouterWithURLParam;