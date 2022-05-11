import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

import { renderGallery, createYear, API_KEY } from './api';

const galleryRef = document.querySelector('.gallery');
const btn = document.querySelector('.navbar-item_btn');
const btnContainer = document.querySelector('.btns-container');
const searchContainer = document.querySelector('.search-form');
const navbarLink = document.querySelector('.navbar-item_link');
const navbarBtn = document.querySelector('.navbar-item_btn');
const pagination = document.querySelector('.pagination-section');
const btnWatched = document.querySelector('.watched');
const btnQueued = document.querySelector('.queued');
const emptyLibrary = document.querySelector('.empty-library');

btn.addEventListener('click', togglePages, { once: true });
btnQueued.addEventListener('click', activeBtn);
btnWatched.addEventListener('click', activeBtn);

function togglePages(e) {
  e.preventDefault();

  galleryRef.innerHTML = '';
  galleryRef.insertAdjacentHTML('beforebegin', '<span class="warn">Sorry, pusto</span>');
  btnContainer.classList.remove('visually-hidden');
  searchContainer.classList.add('visually-hidden');

  navbarLink.classList.remove('current');
  navbarBtn.classList.add('current');

  pagination.classList.add('visually-hidden');
}

function updateMarkup() {
  let markup = '<div class=warn>ThereIsNoSpoon</div>';

  galleryRef.innerHTML = '';
  emptyLibrary.insertAdjacentHTML('beforeend', markup);
}

function activeBtn() {
  if ((btnWatched.contains = 'active')) {
    btnQueued.classList.toggle('active');
  }
  if ((btnQueued.contains = 'active')) {
    btnWatched.classList.toggle('active');
  }
}

//--------- check LS
if (localStorage.getItem('watched') === null) {
  localStorage.setItem('watched', JSON.stringify([]));
}

if (localStorage.getItem('queue') === null) {
  localStorage.setItem('queue', JSON.stringify([]));
}

const watchedParse = JSON.parse(localStorage.getItem('watched'));
const queueParse = JSON.parse(localStorage.getItem('queue'));
//-------------

//-----//-----
let filmId = '453395';
let filmId2 = '453396';
// let filmId = '';
localStorage.setItem('watched', JSON.stringify([filmId]));
localStorage.setItem('watched', JSON.stringify([filmId2]));

let serializedState = localStorage.getItem(key);

// return (serializedState = JSON.parse(serializedState) || undefined);

// watchedParse.map(Id => {
//   fetchFilmListById(Id);
// });

async function fetchFilmListById(filmId) {
  try {
    const { data } = await axios.get(`/movie/${filmId}?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

function renderWatchedList() {
  console.log(watchedParse.length);
  if (watchedParse.length === 0) {
    refs.emptyLib.insertAdjacentHTML('afterbegin', emptyLibrary());
  } else {
    watchedParse.map(Id => {
      return fetchFilmListById(Id);
    });
  }
}

renderWatchedList();
// { id, img, title, filmGenres, releaseYear, vote_average }
