

export default function ComponenteHijo(props){

    const handleClick = () =>{

        props.onClick(props.id)
    }

    return <button onClick={handleClick}>Controlar evento</button>
}