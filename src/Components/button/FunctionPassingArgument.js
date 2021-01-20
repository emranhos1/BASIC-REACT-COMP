import { React } from "react";

function FunctionalPassingArgument(props){

    function btnClicked(params) {
        alert("Functional Button Clicked and " + params);
    }

    return(
        <div>
            <button onClick={btnClicked.bind(this, props.value)}>FunctionalPassingArgument</button>
            
            {/* if function called with '()' this, function will called before page load */}
            {/* <button onClick={this.btnClicked()}>ClassButtonClick</button>  */}
        </div>
    );
}

export default FunctionalPassingArgument