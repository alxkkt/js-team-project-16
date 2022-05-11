import axios from 'axios';
import genresData from './genres.json';
import galleryMarkup from '../templates/gallery-markup.hbs';
import { debounce } from 'lodash';
import { pagination, cleanupPagination } from './pagination';
import Spinner from './spinner';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const TREND_URL = `/trending/movie/week`;
const SEARCH_URL = `/search/movie`;
const API_KEY = 'f65bce350427b2684a98ce5b213c02c8';
const DEBOUNCE_DELAY = 300;

const spinnerProcess = new Spinner('.spinner');

const gallery = document.querySelector('.gallery');
const input = document.querySelector('.input-box');
const form = document.querySelector('.search-form');

input.addEventListener('input', debounce(onInputMovie, DEBOUNCE_DELAY));
form.addEventListener('submit', onButtonClick);
form.addEventListener('keydown', ({ key }) => {
  if (key === 'Enter') {
    searchMovie();
  }
});

// fetch TREND FILM
async function getTrendFilm(page) {
  spinnerProcess.addSpinner();
  try {
    const { data } = await axios.get(`${TREND_URL}?api_key=${API_KEY}&page=${page}`);
    spinnerProcess.closeSpinner();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getSearchFilm(value, page) {
  spinnerProcess.addSpinner();
  try {
    const { data } = await axios.get(
      `${SEARCH_URL}?api_key=${API_KEY}&query=${value}&page=${page}`,
    );
    spinnerProcess.closeSpinner();
    return data;
  } catch (error) {
    console.error(error);
  }
}

//search submit

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
      createMarkup(data);
    }
  }
}

// render MAIN PAGE
async function firstPage() {
  try {
    const data = await getTrendFilm(1);

    createMarkup(data);

    trendPagination(data.total_results);
  } catch (error) {
    console.error(error);
  }
}

firstPage();

//SEARCH PAGINATION
function searchPagination(totalResults) {
  const totalPagination = pagination(totalResults);
  totalPagination.on('beforeMove', async event => {
    const searchText = input.value.trim();
    const data = await getSearchFilm(searchText, event.page);
    window.scrollTo(0, 0);

    createMarkup(data);
  });
}

//trend pagination
function trendPagination(totalResults) {
  const totalPagination = pagination(totalResults);
  totalPagination.on('beforeMove', async event => {
    const data = await getTrendFilm(event.page);
    window.scrollTo(0, 0);

    createMarkup(data);
  });
}

function renderError() {
  gallery.innerHTML = `<div class="search-error">Sorry, could not find a film </div>`;
}

function createMarkup(data) {
  gallery.innerHTML = galleryMarkup(data.results);
  sessionStorage.setItem('current-page', JSON.stringify(data.results));
}
