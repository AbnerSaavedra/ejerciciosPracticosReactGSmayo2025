import { useState } from "react";


export default function ListaEliminarItem(){

    const [items, setItems] = useState([
        {id: 1, text: 'Manzana'}, 
        {id: 2, text: 'Cambur'}, 
        {id: 3, text: 'Naranja'}])

    const agregarItem = () => {
        setItems([...items, {id: items.length + 1, text: 'Uva'}])
    }

    const eliminarItem = (itemId) => {
        const newItems = items.filter((item) => item.id !== itemId)
        setItems(newItems)
    }


    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.text}
                        
                        <button  onClick={()=>eliminarItem(item.id)}>Eliminar item</button>
                    </li>
                ))}
            </ul>
            <button onClick={agregarItem}>Agregar item</button>
        </div>
    )
}