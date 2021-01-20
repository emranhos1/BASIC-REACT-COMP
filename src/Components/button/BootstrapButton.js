import { React } from "react";

function BootstrapButton(props){

    function btnClicked(params) {
        alert("Functional Button Clicked and " + params);
    }

    return(
        <div>
            {/* First need to add bootstrap in project for that run 'npm install --save bootstrap' and then import. */}
            {/* bootstrap is import in App.js for that bootstrap can use anywhere in this App */}
            <button className="btn btn-primary m-5" onClick={btnClicked.bind(this, props.value)}>Bootsrtap Button</button>
        </div>
    );
}

export default BootstrapButton