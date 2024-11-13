import React from "react";
import { Link } from "react-router-dom";
// import './PeopleCard.css';

function PeopleCard({ people }) {
    // Extraer el ID de la URL de la persona
    const urlTokenArrays = people.url.split('/');
    const id = urlTokenArrays[urlTokenArrays.length-2];  // Extrae el ID de la URL
    //console.log('id', id, "people.url", people.url);
    return (
        <div className="people-card">
            <Link to={`/people/${id}`}> {/* Enlaces dinámicos que incluyen el ID de cada persona */}
                {/* <img src={product.image} alt={product.title} /> */}
                <h3>{people.name}</h3>
            </Link>                
            <p>${people.birth_year}</p>
            
        </div>
    );
}

export default PeopleCard;

