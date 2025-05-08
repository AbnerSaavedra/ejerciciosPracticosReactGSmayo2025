

export default function MensajeTernario(props){

     return props.mensaje ? <p>Se muestra mensaje: {props.mensaje}</p> 
     : <p>No hay mensaje ternario para mostrar</p>
}