import './App.css';
import About from './Components/About/About';
import Helper2 from './Components/Helper2/Helper2';
import Helper from './Components/Helper/Helper';
import Projects from './Components/Projects/Projects';


function App() {
  return (
    <div className="App">
      <Helper />
       <About />
       <Helper2 />
      <Projects />
    </div>
  );
}

export default App;
