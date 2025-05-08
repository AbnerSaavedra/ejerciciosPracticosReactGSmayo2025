

export default function Saludo(props){

    const obtenerSaludo = () =>{

        return `Hola soy, ${props.nombre}`
    }

    return (
        <div>
            <p>
                {obtenerSaludo()}
            </p>
        </div>
    )
}