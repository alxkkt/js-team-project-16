import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const TREND_URL = `/trending/movie/week`;
const SEARCH_URL = `/search/movie`;
const API_KEY = 'f65bce350427b2684a98ce5b213c02c8';

const gallery = document.querySelector('.gallery');

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
  } catch (error) {
    console.error(error);
  }
}

async function getGenre() {
  try {
    const { data } = await axios.get(`genre/movie/list?api_key=${API_KEY}`);
    genres = data.genres;
  } catch (error) {
    console.error(error);
  }
}

getGenre();

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

function getGenreName(genreId) {
  const genreNames = genreId.map(id => {
    const { name } = genres.find(item => item.id === id) ? genres.find(item => item.id === id) : '';
    return name;
  });
  return genreNames;
}

getGenreName();

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
                <p>${release_date} &#124;</p>
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
