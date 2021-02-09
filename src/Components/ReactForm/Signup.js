import React, { Component } from 'react';

class Signup extends Component {

    constructor(){
        super()
        this.state={
            firstName : '',
            lastName  : '',
            email     : '',
            cellNo    : '',
            address   : '',
            country   : ''
        }
    }

    onChangeHandlerEvent = (event) =>{
        var inputName   = event.target.name;
        var inputValue  = event.target.value;

        this.setState({
            [inputName] : inputValue
        })

        //Field Validation
        var namePattern  = /^([a-zA-Z ]){2,30}$/;
        var emailPattern = /\S+@\S+\.\S+/;
        var cellPattern = Number;
        var addressPattern = /^([a-zA-z0-9/\\''()/@.,-\s]{2,255})$/;//FIXME
        
        if (inputName === 'firstName') {
            if(!namePattern.test(inputValue)){
                this.setState({firstName : 'First name invalid'})
            }
        }

        if (inputName === 'lastName') {
            if(!namePattern.test(inputValue)){
                this.setState({lastName : 'Last name invalid'})
            }
        }

        if(inputName === 'email'){
            if(!emailPattern.test(inputValue)){
                this.setState({email : 'Email invalid'})
            }
        }

        if(inputName === 'cellNo'){
            if (!cellPattern(inputValue)) {
                this.setState({cellNo : 'Cell no invalid'})
            }
        }

        if(inputName === 'address'){
            if (!addressPattern.test(inputValue)) {
                this.setState({address :'Address invalid'})
            }
        }
    }

    onSubmitHandlerEvent = () =>{
        alert("First Name : " + this.state.firstName +", " +
              "Last Name : " + this.state.lastName +", " +
              "Email : " + this.state.email +", " +
              "Cell No : " + this.state.cellNo +", " +
              "Address : " + this.state.address +", " +
              "Country : " + this.state.country
        );
    }

    render() {
        return (
            <div>
                <h1>Registration Form</h1>
                {/*<p>First Name : {this.state.firstName}</p>*/}
                {/*<p>Last Name  : {this.state.lastName}</p>*/}
                {/*<p>Email      : {this.state.email}</p>*/}
                {/*<p>Cell No    : {this.state.cellNo}</p>*/}
                {/*<p>Address    : {this.state.address}</p>*/}
                {/*<p>Country    : {this.state.country}</p>*/}
                <form onSubmit={this.onSubmitHandlerEvent}>
                    <input className='form-control' onChange={this.onChangeHandlerEvent} name='firstName' type='text'   placeholder='First Name'/>
                    <input className='form-control' onChange={this.onChangeHandlerEvent} name='lastName'  type='text'   placeholder='Last Name'/>
                    <input className='form-control' onChange={this.onChangeHandlerEvent} name='email'     type='text'   placeholder='Email'/>
                    <input className='form-control' onChange={this.onChangeHandlerEvent} name='cellNo'    type='text'   placeholder='Cell No'/>
                    <textarea className='form-control' onChange={this.onChangeHandlerEvent} name='address' placeholder='Address'/>
                    <select className='form-control' name='country' onChange={this.onChangeHandlerEvent}>
                        <option>Select Country</option>
                        <option>Bangladesh</option>
                        <option>Saudia</option>
                        <option>Iran</option>
                        <option>Irak</option>
                    </select>
                    <input className='btn btn-success' name='submit' type='submit' value='Submit'/>
                </form>
            </div>
        );
    }
}

export default Signup;