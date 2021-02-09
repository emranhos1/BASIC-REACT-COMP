import React, {Component} from 'react';

class Login extends Component {

    constructor() {
        super();
        this.state={
            username : '',
            password : '',
            message  : ''
        }
    }
    onClickEventHandler = () =>{
        const user = this.state.username
        const pass = this.state.password

        if(user === null || pass === null || pass === '' || user === ''){
            this.setState({
                message: 'Username or password cant be null'
            })
        } else {
            sessionStorage.setItem('username', this.state.username);
            sessionStorage.setItem('password', this.state.password);
            this.setState({
                message: 'Session Set all path can accessible.'
            })
        }

    }

    onChangeEventHandler = (event) =>{

        const inputName   = event.target.name;
        const inputValue  = event.target.value;

        this.setState({
            [inputName] : inputValue
        })
    }

    render() {
        return (
            <div>
                <h5>{this.state.message}</h5>
                <input className='form-control' type='text'     name='username' placeholder='username' onChange={this.onChangeEventHandler}/>
                <input className='form-control' type='password' name='password' placeholder='password' onChange={this.onChangeEventHandler}/>
                <input className='form-control btn btn-primary' type='submit'   value='Login'   onClick={this.onClickEventHandler}/>
            </div>
        );
    }
}

export default Login;