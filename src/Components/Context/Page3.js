import React, {Component} from 'react';
import { Consumer } from "./MyContext";

class Page3 extends Component {
    render() {
        return (
            <div>
                <h4>
                    <Consumer>
                        {
                            msg=>{
                                return msg
                            }
                        }
                    </Consumer>
                </h4>
            </div>
        );
    }
}

export default Page3;