

import React, { useState } from "react";

export default function ContadorTimeout(){

    const [contador, setContador] = useState(0)

    const incrementarContador = () => {

        setTimeout(() => {
            console.log("Contador dentro del setTimeout antes", contador)
            
            setContador(contador + 1)

            console.log("Contador dentro del setTimeout después", contador)

        }, 3000);
    }

    return (
        <div>
           <p>Contador: {contador}</p>
           <button onClick={incrementarContador} type="button">Incrementar timeout</button>
        </div>
    )
}