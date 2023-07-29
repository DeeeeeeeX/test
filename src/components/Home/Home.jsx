import React, {useEffect, useState} from 'react';
import s from './Home.module.scss'
import Header from "../Header/Header";
import Characters from "../Characters/Characters";
import {fetchCharacters} from "../../api/api";
import Pagination from "../Assets/Pagination/Pagination";

const Home = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [activeCharacter, setActiveCharacter] = useState(null);
    const [characters, setCharacters] = useState([]);
    const [filters, setFilters] = useState({
        name: '',
        status: '',
        species: '',
        type: '',
        gender: ''
    });


    const handleFilterChange = (event) => {
        const {name, value} = event.target;
        setFilters((prevFilters) => ({...prevFilters, [name]: value}));
    };

    const handleMouseEnter = (character) => {
        setActiveCharacter(character);
    };

    const handleMouseLeave = () => {
        setActiveCharacter(null);
    };


    const fetchData = async (filters, currentPage) => {
        const response = await fetchCharacters(filters, currentPage)
        if (response) {
            setCharacters(response)
        } else {
            console.error('Ошибка при получении данных')
        }
    }

    useEffect(() => {
        fetchData(filters, currentPage)
    }, [filters, currentPage])

    return (
        <div className={s.container}>
            {console.log('Render')}
            <Header
                filters={filters}
                handleMouseEnter={handleMouseEnter}
                handleFilterChange={handleFilterChange}
                activeCharacter={activeCharacter}
            />
            <Characters
                characters={characters}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                activeCharacter={activeCharacter}
            />
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>)
}

export default Home;