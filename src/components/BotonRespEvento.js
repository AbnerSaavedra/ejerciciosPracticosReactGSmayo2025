

export default function BotonPersonalizado(props){

    const handleClick = () => {
        alert(`Mensaje: ${props.mensaje}, Usuario: ${props.usuario}`)
        props.onClick(props.usuario)
    }

    return (
        <button onClick={handleClick}>{props.texto}</button>
    )
}