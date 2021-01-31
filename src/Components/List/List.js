import React, { Component } from 'react';

class List extends Component {

    dataList = (data) =>{
        return(<option>{data}</option>)
    }
    
    anotherDataList = (data) =>{
        return(<option>{data*10}</option>)
    }

    render() {

        const country  = ['Bangladesh', 'Iran', 'Irak', 'Pakistan'];
        const dataItem = country.map(this.dataList);

        const num  = [1,2,3,4,5,6,7,8,9];
        const anotherDataItem = num.map(this.anotherDataList);
        return (
            <div>
                <br></br>
                <h1>List</h1>
                <select className='form-control'>
                    {dataItem}
                </select>
                <select className='form-control'>
                    {anotherDataItem}
                </select>
            </div>
        );
    }
}

export default List;