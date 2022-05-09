import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const TREND_URL = `/trending/movie/week`;
const SEARCH_URL = `/search/movie`
const API_KEY = 'f65bce350427b2684a98ce5b213c02c8';

async function getTrendFilm (page) {
    try {
        const { data } = await axios.get(`${TREND_URL}?api_key=${API_KEY}&page=${page}`);
        return data
    } catch (error) {
        console.error(error);
    }
}

console.log(getTrendFilm(1));

async function getSearchFilm (value, page) {
    try {
        const {data} = await axios.get(`${SEARCH_URL}?api_key=${API_KEY}&query=${value}&page=${page}`);
    } catch (error) {
        console.error(error);
    }
}

console.log(getSearchFilm("Spider", 1))
