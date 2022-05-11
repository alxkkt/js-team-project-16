import axios from 'axios';
import genresData from './genres.json';
import galleryMarkup from '../templates/gallery-markup.hbs';
import { debounce } from 'lodash';
import { pagination, cleanupPagination } from './pagination';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const TREND_URL = `/trending/movie/week`;
const SEARCH_URL = `/search/movie`;
const API_KEY = 'f65bce350427b2684a98ce5b213c02c8';
const DEBOUNCE_DELAY = 300;

const gallery = document.querySelector('.gallery');
const input = document.querySelector('.input-box');
const form = document.querySelector('.search-form');

let searchPage = 1;
// fetch TREND FILM
async function getTrendFilm(page) {
  try {
    const { data } = await axios.get(`${TREND_URL}?api_key=${API_KEY}&page=${page}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getSearchFilm(value, page) {
  try {
    const { data } = await axios.get(
      `${SEARCH_URL}?api_key=${API_KEY}&query=${value}&page=${page}`,
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

//search submit
form.addEventListener('submit', onButtonClick);
//search keydown
form.addEventListener('keydown', ({ key }) => {
  if (key === 'Enter') {
    searchMovie();
  }
});

input.addEventListener('input', debounce(onInputMovie, DEBOUNCE_DELAY));

function onInputMovie() {
  searchMovie();
}

async function onButtonClick(event) {
  event.preventDefault();
  searchMovie();
}

async function searchMovie() {
  const searchText = input.value.trim();
  if (searchText !== '') {
    const data = await getSearchFilm(searchText, 1);

    if (data.total_results > 20) {
      searchPagination(data.total_results);
    } else {
      cleanupPagination();
    }
    if (data.total_results === 0) {
      renderError();
    } else {
      gallery.innerHTML = galleryMarkup(data.results);
      sessionStorage.setItem('current-page', JSON.stringify(data.results));
    }
  }
}

// fetch GENRE
async function getGenre() {
  try {
    const { data } = await axios.get(`genre/movie/list?api_key=${API_KEY}`);
    return data.genres;
  } catch (error) {
    console.error(error);
  }
}
// render MAIN PAGE
async function firstPage() {
  try {
    const data = await getTrendFilm(1);

    gallery.innerHTML = galleryMarkup(data.results);
    sessionStorage.setItem('current-page', JSON.stringify(data.results));

    trendPagination(data.total_results);
  } catch (error) {
    console.error(error);
  }
}

firstPage();
// CREATE YEAR
function createYear(obj) {
  return obj.slice(0, 4);
}
// FUNCTION FOR GENRE

// MARK UP

//SEARCH PAGINATION
function searchPagination(totalResults) {
  const totalPagination = pagination(totalResults);
  totalPagination.on('beforeMove', async event => {
    const searchText = input.value.trim();
    const data = await getSearchFilm(searchText, event.page);
    window.scrollTo(0, 0);

    gallery.innerHTML = galleryMarkup(data.results);
    sessionStorage.setItem('current-page', JSON.stringify(data.results));
  });
}

//trend pagination
function trendPagination(totalResults) {
  const totalPagination = pagination(totalResults);
  totalPagination.on('beforeMove', async event => {
    const data = await getTrendFilm(event.page);
    window.scrollTo(0, 0);

    gallery.innerHTML = galleryMarkup(data.results);
    sessionStorage.setItem('current-page', JSON.stringify(data.results));
  });
}

function getGenreName(genreId) {
  const genreNames = genreId.map(id => {
    const { name } = genres.find(item => item.id === id) ? genres.find(item => item.id === id) : '';
    return name;
  });
  return genreNames;
}

// getGenreName();
