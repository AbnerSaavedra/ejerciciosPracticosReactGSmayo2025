import { useState } from "react";


export default function AgregarItemArreglo(){

    const [items, setItems] = useState(['Manzana', 'Cambur', 'Naranja'])

    const agregarItem = () => {
        setItems([...items, 'Uva'])
    }

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                <li></li>
            </ul>
            <button onClick={agregarItem}>Agregar item</button>
        </div>
    )
}