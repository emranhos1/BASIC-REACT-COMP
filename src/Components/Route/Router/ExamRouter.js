import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ExamNavigation from "./ExamNavigation";
import ExamRoute from "./ExamRoute";

class ExamRouter extends Component {
    render() {
        return (
            <Router>
                <ExamNavigation/>
                <ExamRoute/>
            </Router>
        );
    }
}

export default ExamRouter;