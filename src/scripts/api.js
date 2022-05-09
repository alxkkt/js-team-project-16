import axios from "axios";

const key = document.querySelector(".gallery")
const API_KEY = 'f65bce350427b2684a98ce5b213c02c8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

function getData () {
    try {
        return axios.get(`trending/movie/week?api_key=${API_KEY}&language=en&page=1`)
    } catch (error) {
        console.error(error);
    }
}

key.addEventListener("click", (e) => {
    console.log(getData())
})