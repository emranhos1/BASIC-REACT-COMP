import React, {Component} from 'react';
import PropsPage2 from "./PropsPage2";

class Page1 extends Component {
    render() {
        return (
            <PropsPage2 name={this.props.name} place={this.props.place}/>
        );
    }
}

export default Page1;