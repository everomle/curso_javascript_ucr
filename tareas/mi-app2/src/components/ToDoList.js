import React, {useState, useEffect} from "react";
import "./Contenedor.css";

//Componentes que muestra la lista

function TaskList ({tasks, removeTask}){
    return (
        <ul>
            {tasks.map((task,index)=>(
                <li key={index}> {task} <button onClick={()=> removeTask(index)} >Quitar</button> </li>
            ))}
        </ul>
    )
}

//Armado del componente principal
function TodoApp(){
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tareas');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [task, setTask] = useState('');

    const addTask = () => {
        setTasks([...tasks, task]);
        setTask('');
    };

    const removeTask = (index)=> {
        setTasks(tasks.filter((_,i)=> i !== index)); 
    };

    // useEffect(()=>{
    //     localStorage.setItem('tareas',tasks)
    // },[tasks]);


    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tasks)); // Convertimos el array a string
      }, [tasks]);

    return(
        <div className="contenedor">
            <h2>To Do List</h2>
            <input type="text"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            >
            </input>
            <button onClick={addTask}>Agregar tarea</button>
            <TaskList tasks={tasks} removeTask={removeTask}/> 
        </div>
    )
}

export default TodoApp;


// Esto es una expresión usando el operador spread (...), que crea un nuevo array.
// ...tasks toma todos los elementos actuales del array tasks y los copia al nuevo array.
// task es la nueva tarea que queremos añadir al final del array.