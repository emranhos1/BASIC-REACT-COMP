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

    onSubmitHandlerEvent = () =>{

        // if(inputValue == null || inputValue == ''){

        // } else {
        //     this.setState({nativeName : 'Native name not be empty'})
        // }

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
                <h2>Posting Gender by API</h2>
                <form onSubmit={this.onSubmitHandlerEvent}>
                    <input className='form-control' onChange={this.onChangeHandlerEvent} name='nativeName' type='text' placeholder='Native Name' required/>
                    <h6>{this.state.nativeName}</h6>

                    <input className='form-control' onChange={this.onChangeHandlerEvent} name='globalName' type='text' placeholder='Global Name' required/>
                    <h6>{this.state.globalName}</h6>

                    <input className='form-control' onChange={this.onChangeHandlerEvent} name='shortName'  type='text' placeholder='Short Name' required/>
                    <h6>{this.state.shortName}</h6>

                    <input className='btn btn-success' name='submit' type='submit' value='Submit'/>
                </form>
            </div>
        );
    }
}

export default PostData;