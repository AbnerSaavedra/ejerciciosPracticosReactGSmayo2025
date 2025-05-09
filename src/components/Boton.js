

export default function Boton(){

    const handleClick = () => {
        alert("¡Botón clickeado!")
    }

    return (
        <button onClick={handleClick}>Clickeame</button>
    )
}