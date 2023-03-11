import logo from './logo.svg';
import './App.css';
import ChildrenWithTitle from './ChildrenWithTitle';
import { FirstReactComponent } from './FirstReactComponent';
import ConditionalRenderingComponent from './ConditionalRenderingComponent';
import listForRender from './RenderingLists';
import InteractionEvents33 from './InteractionEvents33';
import StatefulComponent34 from './StatefulComponent34';


function App() {
  const notFiltered = listForRender.map((item) => (
    <ul key={item.value}>
      <li>{item.name}</li>
    </ul>
  ));

  const filteredItems = listForRender.filter(item => item.value % 2 === 0);
  const filtered = filteredItems.map((item) => (
    <ul key={item.value}>
      <li>{item.name}</li>
    </ul>
  ));

  return (
    <div>
      <InteractionEvents33 />
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
      <section>
        <h1>Full list</h1>
        {notFiltered}
      </section>
      <section>
        <h1>Filtered list</h1>
        {filtered}
      </section>
      <StatefulComponent34 />
    </div>
  );
}

export default App;