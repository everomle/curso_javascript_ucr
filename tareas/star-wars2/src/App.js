import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PeopleDetails from "./components/PeopleDetails";
import PeopleGrid from "./components/PeopleGrid";

function App() {
    return (
        <Router>
            <Routes>
                {/* Ruta para la página principal (raíz) */}
                <Route path="/" element={<PeopleGrid />} />

                {/* router-dom: definir una ruta dinámica en tu componente */}
                {/* Usamos :param en la ruta para indicar que esa parte de la URL es dinámica. */}
                <Route path='/people/:id' element={ <PeopleDetails/>} /> 
            </Routes>
        </Router>
    );
}

export default App;
