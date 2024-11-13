import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PeopleCard from './PeopleCard';
// import Pagination from './Pagination';
// import './PeopleGrid.css';

function PeopleGrid() {
    const [peoples, setPeoples] = useState([]);
    // const [filteredProducts, setFilteredProducts] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const productsPerPage = 10;


    useEffect(() => {
        axios.get('https://swapi.dev/api/people')
    .then(response => {
        if (Array.isArray(response.data.results)) {
            setPeoples(response.data.results);
        } else {
            console.error('La respuesta no contiene un array en "results".');
        }
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
    }, []);

    

    // useEffect(() => {
    //     const filtered = products.filter(product =>
    //         product.title.toLowerCase().includes(searchQuery.toLowerCase())
    //     );
    //     setFilteredProducts(filtered);
    //     setCurrentPage(1);
    // }, [products, searchQuery]);

    // const currentProducts = filteredProducts.slice(
    //     (currentPage - 1) * productsPerPage,
    //     currentPage * productsPerPage
    // );

    return (
        <div className="people-grid">
            {peoples.map(people => (
                <PeopleCard key={people.name} people={people} />
            ))}
            {/* <Pagination
                totalProducts={filteredProducts.length}
                productsPerPage={productsPerPage}
                setCurrentPage={setCurrentPage}
            /> */}
        </div>
    );
}

export default PeopleGrid;
