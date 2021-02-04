import React, { Component } from 'react';

class JsonFormatList extends Component {
    render() {
        const address = [{
            house : '10, D',
            city  : 'Dhaka',
            zip   : '1212'
        },{
            house : '20, E',
            city  : 'Gazipur',
            zip   : '1717'
        },{
            house : '30, F',
            city  : 'Ramna',
            zip   : '1217'
        }];

        const dataItemHouse = address.map((dataHouse) => {
            return (<option key={dataHouse.house}>{dataHouse.house}</option>)
        });

        const dataItemCity = address.map((dataCity) => {
            return (<option key={dataCity.city}>{dataCity.city}</option>)
        });
        
        const dataItemZip = address.map((dataZip) => {
            return (<option key={dataZip.zip}>{dataZip.zip}</option>)
        });
        
        return (
            <div>
                <h1>Json Format List</h1>
                <select className='form-control'>{dataItemCity}</select>
                <select className='form-control'>{dataItemHouse}</select>
                <select className='form-control'>{dataItemZip}</select>
            </div>
        );
    }
}

export default JsonFormatList;