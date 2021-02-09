import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginNavigation from "./LoginNavigation";
import LoginRoute from "./LoginRoute";

class LoginRouter extends Component {
    render() {
        return (
            <Router>
                <LoginNavigation/>
                <LoginRoute/>
            </Router>
        );
    }
}

export default LoginRouter;