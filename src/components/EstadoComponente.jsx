

import React, { useState } from "react";

export default function Contador(){

    const [contador, setContador] = useState(0)

    const incrementarContador = () => {

        setContador(contador + 1)
    }

    return (
        <div>
           <p>Contador: {contador}</p>
           <button onClick={incrementarContador} type="button">Incrementar</button>
        </div>
    )
}