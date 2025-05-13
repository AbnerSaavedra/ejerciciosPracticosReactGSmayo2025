
import { useState } from "react"

export default function SintaxisExtendida(){

        const verficarCopiaOriginal = () =>{

            const persona = {
            nombre: 'Juan',
            edad: 30,
            direccion: {
                calle: "Calle principal",
                ciudad: "Madrid"
            }
        }

            const copiaPersona = { ...persona }

            console.log("Copia persona: ", copiaPersona)

            copiaPersona.nombre = "Abner"   
            console.log("Copia persona: ", copiaPersona)

            console.log("Persona: ", persona)

        copiaPersona.direccion.ciudad = "Quibor"

        console.log("Copia persona: ", copiaPersona)

        console.log("Persona: ", persona)

        }

    return (
        <div>
            <button onClick={verficarCopiaOriginal}>Verficar cambios</button>
        </div>
    )
}


