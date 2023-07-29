import axios from "axios";

export const fetchCharacters = async (filters, currentPage) => {
    try {
        const {name, status, species, type, gender} = filters || {}
        const response = await axios.get(
            `https://rickandmortyapi.com/api/character/?page=${currentPage}${name ? `&name=${name}` : ''}${status ? `&status=${status}` : ''}${species ? `&species=${species}` : ''}${type ? `&type=${type}` : ''}${gender ? `&gender=${gender}` : ''}`
        )
        return response.data.results
    } catch (error) {
        console.error('Ошибка при получении данных', error)
        return null
    }
}