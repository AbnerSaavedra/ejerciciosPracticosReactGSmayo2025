

export default function MensajeCondicional(props){

    if(props.mensaje)
        return <p>Se muestra mensaje: {props.mensaje}</p>
    else
        return <p>No hay mensaje para mostrar</p>
}