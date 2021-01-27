import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Render extends Component {

    newfunction() {
        var container = document.getElementById("name");
        var element   = <h5>From ReactDOM Render</h5>;
        
        var callback  = function() {
            alert("Render Callback")
        }

        //ReactDOM render method same as hydrate method
        //callback optional
        ReactDOM.render(element,container, callback);
    }
    render() {
        return (
            <div>
                <h6 id="name">Hi This is Emran</h6>
                <button onClick={this.newfunction}>Render</button>    
            </div>
        );
    }
}

export default Render;