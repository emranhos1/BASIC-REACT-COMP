import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <p>Form</p>
                    <input type="text" placeholder="Name"></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default Form;