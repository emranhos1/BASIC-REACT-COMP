import React, {Component} from 'react';
import PropsPage1 from "./PropsPage1";

class ComponentTreeProps extends Component {
    render() {
        return (
            <div>
                <PropsPage1 name={this.props.name} place={this.props.place}/>
            </div>
        );
    }
}

export default ComponentTreeProps;