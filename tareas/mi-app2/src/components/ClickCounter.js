import React, {useState, useEffect} from "react";

function ClickCounter (){
    const [count,setCount] = useState(()=>{
        const savedCount = localStorage.getItem('count');
        return savedCount ? JSON.parse(savedCount) : 0;
    });

    // metodo ==> localStorage.setItem(keyName, keyValue);
    useEffect(()=>{
        localStorage.setItem('count',count)
    },[count]);

    return (
        <div className="container">
            <h1>Clicks: {count}</h1>
            <button onClick={()=> setCount(count + 1)} >incrementar</button>
        </div>
    );
}

export default ClickCounter;