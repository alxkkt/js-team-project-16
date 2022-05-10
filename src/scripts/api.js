import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const TREND_URL = `/trending/movie/week`;
const SEARCH_URL = `/search/movie`;
const API_KEY = 'f65bce350427b2684a98ce5b213c02c8';

const gallery = document.querySelector('.gallery');
// fetch TREND FILM
async function getTrendFilm(page) {
  try {
    const { data } = await axios.get(`${TREND_URL}?api_key=${API_KEY}&page=${page}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}
// fetch with SEARCH
async function getSearchFilm(value, page) {
  try {
    const { data } = await axios.get(
      `${SEARCH_URL}?api_key=${API_KEY}&query=${value}&page=${page}`,
    );
  } catch (error) {
    console.error(error);
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
    const movies = data.results;
    renderGallery(movies);
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
function renderGallery(movies) {
  const markUp = movies
    .map(
      ({ poster_path, title, original_title, genre_ids, release_date, vote_average }) => `
    <li class="film">
    <div class="film__item">
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
    </div>
    <div class="film__description">
        <p class="film__title">${original_title}</p>
        <ul class="film__info">
            <li class="film__genres">
                <p>${genre_ids} &#124;</p>
            </li>
            <li class="film__year">
                <p>${createYear(release_date)} &#124;</p>
            </li>
            <li class="film__rating">
                <p><span class="film__value">${vote_average}</span></p>
            </li>
        </ul>
    </div>
</li>
    `,
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markUp);
}
