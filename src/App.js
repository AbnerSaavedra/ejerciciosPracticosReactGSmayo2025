import logo from './logo.svg';
import './App.css';
import Mensaje from './components/Mensaje';
import MensajeProps from './components/MensajeProps';
import DatosPersonales from './components/DatosPersonales';
import Calculadora from './components/Calculadora';
import Saludo from './components/Saludo';
import MensajeCondicional from './components/MesajeCondicional';
import MensajeTernario from './components/MensajeCondOperadorTernario';
import MensajeDobleOperador from './components/MensajeCondDobleOpAmpersand';
import Lista from './components/Lista';
import ListaDestacados from './components/ListaDestacados';
import ListaQuimicos from './components/FilteredList';
import Boton from './components/Boton';
import BotonPersonalizado from './components/BotonRespEvento';
import ComponenteHijo from './components/ComponenteHijo';

function App() {

  const items =  [{id: 1, number: 35}, {id: 1, number: 1}, {id: 1, number: 10}, {id: 1, number: 34}, {id: 1, number: 1}]

  const manejarOnClick = (usuario) =>{
    console.log(`El usuario ${usuario} ha clickeado el botón.`)
  }

  const manejarOnClick2 = (id) =>{
    console.log(`Botón clickeado con el id ${id}`)
  }

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
      </header>
      <Mensaje /> 
      <MensajeProps mensaje="Mensaje props" />
      <DatosPersonales edad="20"/>
      <Calculadora a={5} b={10}/>
      {/*<Calculadora a="5" b="10"/>*/}
      {/*<Saludo nombre="Abner" />
      <MensajeCondicional mensaje="Mensaje condicional" />
      {/*<MensajeCondicional mensaje={false} />*/}
      {/*<MensajeTernario mensaje="Mensaje ternario" />
      <MensajeDobleOperador mensaje="Mensaje doble operador "/>
      <Lista items={items} />
      <ListaDestacados />
      <h1>
        Lista de químicos destacados
      </h1>
      <ListaQuimicos />*/}
      <Boton />
      <br/>
      <BotonPersonalizado 
        texto="Enviar"
        mensaje="Botón personalizado clickeado"
        usuario="Abner"
        onClick={manejarOnClick}
      />
      <br/>
      <ComponenteHijo onClick={manejarOnClick2} id={123}/>
    </div>
  );
}

export default App;
