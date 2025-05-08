
function Lista(props){

    const items = props.items

    return (

        <ul>
            {items.map((item) => (
                <li key={item.id}> {item.number} </li>  
            ))}
        </ul>
    )
}

export default Lista