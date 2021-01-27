import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Render extends Component {

    newfunction() {
        var container = document.getElementById("name1");
        var element   = <h5>From ReactDOM Hydrate</h5>;
        
        var callback  = function() {
            alert("Hydrate Callback")
        }

        //ReactDOM hydrate method same as render method
        //callback optional
        ReactDOM.hydrate(element,container, callback);
    }
    render() {
        return (
            <div>
                <h6 id="name1">Hi This is Emran</h6>
                <button onClick={this.newfunction}>Hydrate</button>    
            </div>
        );
    }
}

export default Render;