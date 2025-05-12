

export default function ComponentePadre(){

    const handleClickPadre = () => {
        
        console.log("Click en el componente Padre.")
    }

    return (

        <div onClick={handleClickPadre}>
            <p>Component Padre</p>
            <ComponenteHijo />
        </div>
    )
}

function ComponenteHijo(){

    const handleClickHijo = (event) => {
        //Para detener la propagación del evento al componente Padre
        event.stopPropagation()
        console.log("Click en el componente Hijo.")
    }

    return <button onClick={handleClickHijo}>Click</button>
}