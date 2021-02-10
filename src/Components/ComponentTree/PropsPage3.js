import React, {Component} from 'react';

class Page3 extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h6>{this.props.place} Page 3 (Passing Props)</h6>
            </div>
        );
    }
}

export default Page3;