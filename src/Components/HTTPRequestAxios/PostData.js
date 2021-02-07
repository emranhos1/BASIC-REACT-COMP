import React, { Component } from 'react';
import Axios from "axios";

class PostData extends Component {

    constructor(){
        super()
        this.state={
            nativeName   : '',
            globalName   : '',
            shortName    : '',
            
            isSuccess  : false,
            message    :''
        }
    }

    onChangeHandlerEvent = (event) =>{
        var inputName   = event.target.name;
        var inputValue  = event.target.value;

        this.setState({
            [inputName] : inputValue
        })

        //Field Validation
        var namePattern      = /^([a-zA-Z ]){2,30}$/;
        var ShortnamePattern = /^([A-Z]){1,1}$/;

        if (inputName === 'nativeName') {
            if(!namePattern.test(inputValue)){
                this.setState({nativeName : 'Native name invalid'})
            }
        }

        if (inputName === 'globalName') {
            if(!namePattern.test(inputValue)){
                this.setState({globalName : 'Global name invalid'})
            }
        }

        if (inputName === 'shortName') {
            if(!ShortnamePattern.test(inputValue)){
                this.setState({shortName : 'Short name invalid'})
            }
        }
    }

    onClickHandlerEvent = () =>{

        const formData = {
            nameNative   : this.state.nativeName,
            nameGlobal   : this.state.globalName,
            shortName    : this.state.shortName,
        };
        Axios.post('http://localhost:9191/v.1.0/rest/gender/add', formData)
            .then(response=>{
                console.log(response);
                this.setState({
                    myData    : response.data.data,
                    isSuccess : response.data.success,
                    message   : response.data.message
                })
            })
            .catch(error=>{
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h3>Post By API</h3>
                <h5>Success : {this.state.isSuccess.toString()}</h5>
                <h5>Message : {this.state.message}</h5>
                {/* <form onSubmit={this.onSubmitHandlerEvent}> */}
                    <input className='form-control' onChange={this.onChangeHandlerEvent} name='nativeName' type='text' placeholder='Native Name'></input>
                    <h6>{this.state.nativeName}</h6>
                    <br></br>
                    <input className='form-control' onChange={this.onChangeHandlerEvent} name='globalName' type='text' placeholder='Global Name'></input>
                    <h6>{this.state.globalName}</h6>
                    <br></br>
                    <input className='form-control' onChange={this.onChangeHandlerEvent} name='shortName'  type='text' placeholder='Short Name'></input>
                    <h6>{this.state.shortName}</h6>
                    <br></br>
                    <input onClick={this.onClickHandlerEvent} className='btn btn-success' name='submit' type='submit' value='Submit'></input>
                {/* </form> */}
            </div>
        );
    }
}

export default PostData;