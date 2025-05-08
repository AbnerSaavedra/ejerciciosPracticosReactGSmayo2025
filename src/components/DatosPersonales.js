

export default function DatosPersonales(props){

   const nombre = "Abner"
    return (
        <div>
            <h3>
                Hola mi nombre es: {nombre}
            </h3>
            <p>
                Y tengo {props.edad} de edad
            </p>
        </div>
    )
}