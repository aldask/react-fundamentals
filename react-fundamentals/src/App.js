import logo from './logo.svg';
import './App.css';

function ChildrenWithTitle ({children, title}) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
function FirstReactComponent() {
  return <p>I am new here</p>;
}

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