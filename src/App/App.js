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
import ConditionalReturn from "../Components/ConditionalReturn/ConditionalReturn";
import ConditionalVariableElement from "../Components/ConditionalReturn/ConditionalVariableElement";
import ForceUpdate from '../Components/ForceUpdate/ForceUpdate';
import Render from '../Components/ReactDOM/Render-Hydrate/Render';
import Hydrate from '../Components/ReactDOM/Render-Hydrate/Hydrate';
import FindDOMNode from '../Components/ReactDOM/FindDOMNode/FindDOMNode';
import Signup from '../Components/Form/Signup';
import List from '../Components/List/List';
import JsonFormatList from '../Components/List/JsonFormatList';

function App() {
    return (
        <div className="App">
            <div className="row">
                <div className="col-md-4" style={{backgroundColor: '#e9dbbb'}}>
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
 
                <div className="col-md-4" style={{backgroundColor: '#23e4ff'}}>
                    <BootstrapButton value="Bootstrap button Clicked"></BootstrapButton>
                    <ArrowFunction msg="Arrived from Arrow Function"></ArrowFunction>
                    <ClassState></ClassState>
                    <ClassStateWithVar></ClassStateWithVar>
                    <SetState></SetState>
                </div>
                
                <div className="col-md-4" style={{backgroundColor: '#6ca339'}}>
                    <ConditionalReturn></ConditionalReturn>
                    <ConditionalVariableElement></ConditionalVariableElement>
                    <ForceUpdate></ForceUpdate>
                    <Render></Render>
                    <Hydrate></Hydrate>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4" style={{backgroundColor: '#dbe58f'}}>
                    <FindDOMNode></FindDOMNode>
                </div>
                <div className="col-md-4" style={{backgroundColor: '#acd999'}}>
                    <Signup></Signup>
                </div>
                <div className="col-md-4" style={{backgroundColor: '#995c56'}}>
                    <List></List>
                    <JsonFormatList></JsonFormatList>
                </div>
            </div>
        </div>
  );
}

export default App;
