import React, { Component } from 'react';
import ReactTable from "react-table-6";
import Axios from "axios";
import 'react-table-6/react-table.css';

class MyTable extends Component {

    constructor(){
        super()
        this.state={
            myData : []
        }
    }
    
    componentDidMount(){
    Axios.get('http://localhost:9191/v.1.0/rest/gender/all')
        .then(response=>{
            this.setState({
                myData    : response.data.data
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }   
    
    render() {
        
        const localData  = [
            {code: '1', nameGlobal: 'Male',   nameNative: 'Male',   shortName: 'M'},
            {code: '2', nameGlobal: 'Female', nameNative: 'Female', shortName: 'F'},
            {code: '3', nameGlobal: 'Other',  nameNative: 'Male',   shortName: 'O'},
        ];
        
        const columnName = [
            {Header : 'SL',           accessor : 'code'},
            {Header : 'Global Name',  accessor : 'nameGlobal'},
            {Header : 'Native Name',  accessor : 'nameNative'},
            {Header : 'Short Name',   accessor : 'shortName'},
            {Header : 'Entry Date',   accessor : 'entryDate'},
            {Header : 'Entry User',   accessor : 'entryUser'},
            {Header : 'Update Date',  accessor : 'amendDate'},
            {Header : 'Update User',  accessor : 'amendUser'}
        ]
        
        return (
            <div>
                <h5>Gender Table</h5>
                <ReactTable
                    data={this.state.myData}
                    columns={columnName}
                    defaultPageSize={5}
                    pageSizeOptions={[5, 10, 15, 20]}
                />
            </div>
        );
    }
}

export default MyTable;