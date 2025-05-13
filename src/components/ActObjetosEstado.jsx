import { useState } from "react";


export default function Formulario(){

    const [persona, setPersona] = useState({
        nombre: 'Juan',
        edad: 30,
        direccion: {
            calle: "Calle principal",
            ciudad: "Madrid"
        }
    })

    const handleNombreChange = (event)=>{
        setPersona({
            ...persona,
            nombre: event.target.value
        })
    }

    const handleCiudadChange = (event)=>{
        setPersona({
            ...persona,
            direccion:{
                ...persona.direccion,
                ciudad: event.target.value
            }
        })
    }

    return (
        <div>
            <input type="text" value={persona.nombre} onChange={handleNombreChange} />
            <input type="text" value={persona.direccion.ciudad} onChange={handleCiudadChange} />
            <p>Nombre: {persona.nombre}</p>
            <p>Ciudad: {persona.direccion.ciudad}</p>
        </div>
    )
}