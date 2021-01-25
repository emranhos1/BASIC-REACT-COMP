import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NormalJSCode from '../Components/normalJSCode/NormalJSCode';
import FunctionalComponent from "../Components/compFunction/FunctionalComponent";
import ClassComponent from "../Components/compClass/ClassComponent";
import FunctionalProps from "../Components/props/FunctionalProps";
import ClassProps from "../Components/props/ClassProps";
import FunctionalButtonClick from "../Components/button/FunctionButtonClick";
import ClassButtonClick from "../Components/button/ClassButtonClick";
import FunctionalPassingArgument from "../Components/button/FunctionPassingArgument";
import ClassPassingArgument from "../Components/button/ClassPassingArgument";
import BootstrapButton from "../Components/button/BootstrapButton";
import ArrowFunction from '../Components/ArrowFunction/ArrowFunction';
import ClassState from "../Components/State/ClassState";
import ClassStateWithVar from "../Components/State/ClassStateWIthVar";
import SetState from "../Components/State/SetState";

function App() {
    return (
        <div className="App">
            <div style={{float:'left'}}>
                <NormalJSCode></NormalJSCode> 
                
                <FunctionalComponent></FunctionalComponent>
                <ClassComponent></ClassComponent>
                
                <FunctionalProps name="Emran" age="30"></FunctionalProps>
                <FunctionalProps name="Istiak"></FunctionalProps>

                <ClassProps name="Emran" age="29"></ClassProps>
                <ClassProps name="Istiak"></ClassProps>

                <FunctionalButtonClick></FunctionalButtonClick>
                <ClassButtonClick></ClassButtonClick>

                <FunctionalPassingArgument value="Argument pass from Function Button"></FunctionalPassingArgument>
                <ClassPassingArgument value="Argument pass from Class Button"></ClassPassingArgument>
            </div>
            <div style={{float:'left'}}>
                <BootstrapButton value="Bootstrap button Clicked"></BootstrapButton>
                <ArrowFunction msg="Arrived from Arrow Function"></ArrowFunction>
                <ClassState></ClassState>
                <ClassStateWithVar></ClassStateWithVar>
                <SetState></SetState>
            </div>
        </div>
  );
}

export default App;
