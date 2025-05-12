

export default function ComponenteHijo(props){

    const handleClick = () =>{
        alert(`Este es el id recibido ${props.id}`)
        props.onClick(props.id)
    }

    return <button onClick={handleClick}>Controlar evento</button>
}