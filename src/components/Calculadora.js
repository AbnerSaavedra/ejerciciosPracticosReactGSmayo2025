

export default function Calculadora(props){
 
     return (
         <div>
             <p>
                 El resultado de la suma es: {props.a + props.b} de edad
             </p>

             {/*<p>
                 El resultado de la suma es: {parseInt(props.a) + parseInt(props.b)} de edad
             </p>*/}
         </div>
     )
 }