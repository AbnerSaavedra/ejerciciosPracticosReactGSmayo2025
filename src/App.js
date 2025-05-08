import logo from './logo.svg';
import './App.css';
import Mensaje from './components/Mensaje';
import MensajeProps from './components/MensajeProps';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>s
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with GracoSoft
        </a>
      </header>*/}
      <Mensaje /> 
      <MensajeProps mensaje="Mensaje props" />
    </div>
  );
}

export default App;
