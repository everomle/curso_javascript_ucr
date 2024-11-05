import React from "react";

// import Saludo from "./components/ComponenteDeClase";
// import SaludoDos from "./components/ComponenteFuncional";
// import Contador from "./components/Contador";
// import CounterClass from "./components/ContadorClase";
// import TodoApp from "./components/ToDoList";
import Timer from "./components/Timer";
import ClickCounter from "./components/ClickCounter";
import TodoApp from "./components/ToDoList";

// function App(){
//   return (
//     <div>
//       {/* <h1>Componente De Clase</h1>
//       <Saludo/>
//       <CounterClass/>
//       <h2>Componente Funcional</h2>  
//       <SaludoDos name='Luis'/>
//       <br></br>
//       <br></br>
//       <Contador/> */}
//       {/* <TodoApp/> */}
//     </div>
//   )
// }

// export default App;


function App() {
  return (
    <div>
       <Timer />
      <ClickCounter/>  
      <TodoApp/>
    </div>
  );
}

export default App;