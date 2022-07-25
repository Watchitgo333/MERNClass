import './App.css';
import Tabs from './components/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  //3 Tab objects are stored here and passed in as props
  const tab1 = {
    tabName: "tab1",
    tabLabel: "Tab 1",
    tabContent: "Blah blah blah",
  };

  const tab2 = {
    tabName: "tab2",
    tabLabel: "Tab 2",
    tabContent: "Hello Hello Hello world",
  };

  const tab3 = {
    tabName: "tab3",
    tabLabel: "Tab 3",
    tabContent: "Howdy",
  };

  return (
    <div className="App">
      <Tabs tab1 = {tab1} tab2 = {tab2} tab3 = {tab3}></Tabs>
    </div>
  );
}

export default App;
