import React, { useState } from "react";
import "./Contenedor.css";

function Contador (){
    const [count, setCount] = useState(0);

    const incrementar = ()=>{
        setCount(count + 1);
    }

    const decrementar = ()=>{
        setCount(count - 1);
    }

    const reset = ()=>{
        setCount(0);
    }

    return (
        <div className="contenedor">
            <p>Ficha: {count}</p>
            {/* <button onClick={()=> setCount(count + 1)}>Sumar</button>
            <button onClick={()=> setCount(count - 1)}>Restar</button> 
            <button onClick={()=> setCount(0)}>Resetear</button>*/}

            <button onClick={incrementar}>sumar</button>
            <button onClick={decrementar}>Restar</button>
            <button onClick={reset}>Resetear</button>
        </div>
    )
}


export default Contador;
