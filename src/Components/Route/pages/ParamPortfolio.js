import React, { Component } from 'react';

class ParamPortfolio extends Component {
    constructor({match}) {
        super();
        this.state={
            name: match.params.name
        }
    }
    render() {
        return (
            <div>
                <h1>Come from Contact</h1>
                <h2>{this.state.name}</h2>
            </div>
        );
    }
}

export default ParamPortfolio;