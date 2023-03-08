import logo from './logo.svg';
import './App.css';
import ChildrenWithTitle from './ChildrenWithTitle';
import { FirstReactComponent } from './FirstReactComponent';


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
    </div>
  );
}

export default App;