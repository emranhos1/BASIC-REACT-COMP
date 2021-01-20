import logo from './logo.svg';
import './App.css';
import NormalJSCode from './Components/normalJSCode/NormalJSCode';
import FunctionalComponent from "./Components/compFunction/FunctionalComponent";
import ClassComponent from "./Components/compClass/ClassComponent";
import FunctionalProps from "./Components/props/FunctionalProps";
import ClassProps from "./Components/props/ClassProps";

function App() {
    return (
        <div className="App">
            <div>
                <NormalJSCode></NormalJSCode> 
                <FunctionalComponent></FunctionalComponent>
                <ClassComponent></ClassComponent>
                
                <FunctionalProps name="Emran" age="30"></FunctionalProps>
                <FunctionalProps name="Istiak"></FunctionalProps>

                <ClassProps name="Emran" age="29"></ClassProps>
                <ClassProps name="Istiak"></ClassProps>

            </div>
        </div>
  );
}

export default App;
