import { React } from "react";

function FunctionalButtonClick(){

    function btnClicked(params) {
        alert("Functional Button Clicked");
    }

    return(
        <div>
            <button onClick={btnClicked} className='btn btn-success'>FunctionalButtonClick</button>
            
            {/* if function called with '()' this, function will called before page load */}
            {/* <button onClick={this.btnClicked()}>ClassButtonClick</button>  */}
        </div>
    );
}

export default FunctionalButtonClick