import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NormalJSCode from '../Components/normalJSCode/NormalJSCode';
import FunctionalComponent from "../Components/compFunction/FunctionalComponent";
import ArrowFunction from '../Components/ArrowFunction/ArrowFunction';
import FunctionalProps from "../Components/props/FunctionalProps";
import FunctionalButtonClick from "../Components/button/FunctionButtonClick";
import FunctionalPassingArgument from "../Components/button/FunctionPassingArgument";
import BootstrapButton from "../Components/button/BootstrapButton";
import ClassComponent from "../Components/compClass/ClassComponent";
import ClassProps from "../Components/props/ClassProps";
import ClassButtonClick from "../Components/button/ClassButtonClick";
import ClassPassingArgument from "../Components/button/ClassPassingArgument";
import ClassState from "../Components/State/ClassState";
import ClassStateWithVar from "../Components/State/ClassStateWIthVar";
import SetState from "../Components/State/SetState";
import ConditionalReturn from "../Components/ConditionalReturn/ConditionalReturn";
import ConditionalVariableElement from "../Components/ConditionalReturn/ConditionalVariableElement";
import ForceUpdate from '../Components/ForceUpdate/ForceUpdate';
import Render from '../Components/ReactDOM/Render-Hydrate/Render';
import Hydrate from '../Components/ReactDOM/Render-Hydrate/Hydrate';
import FindDOMNode from '../Components/ReactDOM/FindDOMNode/FindDOMNode';
import Signup from '../Components/ReactForm/Signup';
import List from '../Components/List/List';
import JsonFormatList from '../Components/List/JsonFormatList';
import GetData from '../Components/HTTPRequestAxios/GetData';
import PostData from '../Components/HTTPRequestAxios/PostData';
import MyTable from '../Components/ReactTable/MyTable';
import ExamRouter from "../Components/Route/Router/ExamRouter";
import ExamRouterWithURLParam from "../Components/Route/RouteWithURLParam/ExamRouterWithURLParam";
import LoginRouter from "../Components/Login/Router/LoginRouter";
import Navigation from "../Components/ReactNavbar/Navigation";
import ReactUseState from "../Components/Hooks/State/ReactUseState";

function App() {
    return (
        <div className="App">
            <div className="row">
                <div className="col-md-3" style={{backgroundColor: '#e9dbbb'}}>
                    <NormalJSCode/>
                    <FunctionalComponent/>
                    <ClassComponent/>
                    <FunctionalProps name="Emran" age="30"/>
                    <FunctionalProps name="Istiak"/>
                    <ClassProps name="Emran" age="29"/>
                    <ClassProps name="Istiak"/>
                    <FunctionalButtonClick/>
                    <ClassButtonClick/>
                </div>

                <div className="col-md-3" style={{backgroundColor: '#23e4ff'}}>
                    <FunctionalPassingArgument value="Argument pass from Function Button"/>
                    <ClassPassingArgument value="Argument pass from Class Button"/>
                    <BootstrapButton value="Bootstrap button Clicked"/>
                    <ArrowFunction msg="Arrived from Arrow Function"/>
                    <ClassState/>
                    <ClassStateWithVar/>
                </div>

                <div className="col-md-3" style={{backgroundColor: '#6ca339'}}>
                    <SetState/>
                    <ConditionalReturn/>
                    <ConditionalVariableElement/>
                    <ForceUpdate/>
                    <Render/>
                </div>

                <div className="col-md-3" style={{backgroundColor: '#dbe58f'}}>
                    <Hydrate/>
                    <FindDOMNode/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3" style={{backgroundColor: '#acd999'}}>
                    <Signup/>
                </div>

                <div className="col-md-3" style={{backgroundColor: '#995c56'}}>
                    <List/>
                    <JsonFormatList/>
                </div>

                <div className="col-md-3" style={{backgroundColor: '#999c59'}}>
                    <ExamRouter/>
                    <br/>
                    <h5>Passing data by url By button click from <b><i>Contact to Portfolio</i></b></h5>
                    <ExamRouterWithURLParam/>
                </div>

                <div className="col-md-3" style={{backgroundColor: '#099b59'}}>
                    <div className="col-md-10">
                        <LoginRouter/>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-5 row" style={{backgroundColor: 'gray'}}>
                    <div className="col-md-6">
                        <GetData/>
                    </div>
                    <div className="col-md-6">
                        <PostData/>
                    </div>
                </div>

                <div className="col-md-7" style={{backgroundColor: 'lightgray'}}>
                    <MyTable/>
                </div>
            </div>

            <div>
                <h6>simple navigation bar</h6>
                <Navigation/>
            </div>

            <br/>
            <div style={{backgroundColor: 'lightcoral'}}>
                <h1>React Hook in Functional Component</h1>
            </div>
            <div className="row">
                <div className="col-md-3" style={{backgroundColor: 'lightblue'}}>
                    <ReactUseState/>
                </div>
            </div>
        </div>
  );
}

export default App;
