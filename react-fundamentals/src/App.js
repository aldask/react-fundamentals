import logo from './logo.svg';
import './App.css';
import ChildrenWithTitle from './ChildrenWithTitle';
import { FirstReactComponent } from './FirstReactComponent';
import ConditionalRenderingComponent from './ConditionalRenderingComponent';


function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <p>You look beautiful</p>
      <FirstReactComponent />
      <ChildrenWithTitle
        title = "I am a title">
        I am children
      </ChildrenWithTitle>
      <h2>False one</h2>
      <ConditionalRenderingComponent
        isBlue = {false}/>
      <h2>True one</h2>
      <ConditionalRenderingComponent
        isBlue = {true}/>
    </div>
  );
}

export default App;