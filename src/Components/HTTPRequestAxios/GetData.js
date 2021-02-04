import React, { Component } from 'react';
import Axios from "axios";

class GetData extends Component {
    
    constructor(){
        super()
        this.state = {
            myData     : [],
            total      : 0,
            isSuccess  : false,
            message    :''
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:9191/v.1.0/rest/gender/all')
            .then(response=>{
                console.log(response);
                this.setState({
                    myData    : response.data.data,
                    total     : response.data.total,
                    isSuccess : response.data.success,
                    message   : response.data.message
                })
            })
            .catch(error=>{
                console.log(error);
            })
    }

    render() {
        const gender  = this.state.myData
        const data = gender.map(gender=>{
            return(
                <option key={gender.code} value={gender.code}>{gender.nameGlobal}</option>
            )
        })

        return (
            <div>
                <br></br>
                <h4>Getting data from API</h4>
                <select style={{backgroundColor: 'blue'}}>
                    <option key='0' value='0'>Select One</option>
                    {data}
                </select>
                <table style={{"borderWidth":"5px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                    <thead>
                        <tr>
                            <td>Total</td>
                            <td>Success</td>
                            <td>Message</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.total}</td>
                            <td>{this.state.isSuccess.toString()}</td>
                            <td>{this.state.message}</td>
                        </tr>
                    </tbody>
                
                </table>
            </div>
        );
    }
}

export default GetData;