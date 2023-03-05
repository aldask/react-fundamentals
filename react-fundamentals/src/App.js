import logo from './logo.svg';
import './App.css';

function FirstReactComponent() {
  return <p>I am new here</p>;
}

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <p>You look beautiful</p>
      <FirstReactComponent />
    </div>
  );
}

export default App;