import React, { Component } from 'react';
import ReactDOM from "react-dom";

class FindDOMNode extends Component {

    changeIMG(){
        var imgID = document.getElementById("imgID");
        
        ReactDOM.findDOMNode(imgID).src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DeNRoEf3Fue39MiEsD_FbVBpEGZHu6Jntw&usqp=CAU";
    }

    render() {
        return (
            <div>
                <img height="200" width="200" id="imgID" 
                    src="https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg"></img>
                <br></br>
                <button onClick={this.changeIMG} className="btn btn-primary">Change image</button>
            </div>
        );
    }
}

export default FindDOMNode;