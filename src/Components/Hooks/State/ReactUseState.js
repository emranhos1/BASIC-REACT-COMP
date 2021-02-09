import React, {useState} from 'react';

const ReactUseState = () => {

    const [name, setName] = useState({
        myName: 'Md. Emran Hossain'
    })

    const onclickEventHandler = () => {
        setName({
            myName: 'Emon'
        })
    }

    return (
        <div>
            <h1>{name.myName}</h1>
            <button className='btn btn-primary' onClick={onclickEventHandler}>Change</button>
        </div>
    );
};

export default ReactUseState;