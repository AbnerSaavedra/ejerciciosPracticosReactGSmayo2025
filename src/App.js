import logo from './logo.svg';
import './App.css';
import Mensaje from './components/Mensaje';
import MensajeProps from './components/MensajeProps';
import DatosPersonales from './components/DatosPersonales';
import Calculadora from './components/Calculadora';
import Saludo from './components/Saludo';
import MensajeCondicional from './components/MesajeCondicional';
import MensajeTernario from './components/MensajeCondOperadorTernario';

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
      <DatosPersonales edad="20"/>
      <Calculadora a={5} b={10}/>
      {/*<Calculadora a="5" b="10"/>*/}
      <Saludo nombre="Abner" />
      <MensajeCondicional mensaje="Mensaje condicional" />
      {/*<MensajeCondicional mensaje={false} />*/}
      <MensajeTernario mensaje="Mensaje ternario" />
    </div>
  );
}

export default App;
