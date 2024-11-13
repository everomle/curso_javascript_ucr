import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function PeopleDetails (){
    const {id} = useParams();
    const [people, setPeople] = useState(null);

    useEffect (()=> {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response => {
            console.log("Datos recibidos:", response.data);
            setPeople(response.data);
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
    }, [id]);

    if (!people) return <p>Cargando Personaje...</p>;

    return(
        <div className="contenedor-people">
        <h2>{people.name}</h2>
        <p>Año de nacimiento: {people.birth_year}</p>
        <p>Color de ojos: {people.eye_color}</p>
        <p>Género: {people.gender}</p>
        <p>Color de cabello: {people.hair_color}</p>
        <p>Altura: {people.height}</p>
        <p>Masa: {people.mass}</p>
        <p>Color de piel: {people.skin_color}</p>
        </div>
    )
}

export default PeopleDetails;