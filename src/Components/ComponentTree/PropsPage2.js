import React, {Component} from 'react';
import PropsPage3 from "./PropsPage3";

class Page2 extends Component {
    render() {
        return (
            <PropsPage3 name={this.props.name} place={this.props.place}/>
        );
    }
}

export default Page2;