import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

import galleryMarkup from '../templates/gallery-markup.hbs';

const galleryRef = document.querySelector('.gallery');
const btn = document.querySelector('.navbar-item_btn');
const btnContainer = document.querySelector('.btns-container');
const searchContainer = document.querySelector('.search-form');
const navbarLink = document.querySelector('.navbar-item_link');
const navbarBtn = document.querySelector('.navbar-item_btn');
const pagination = document.querySelector('.pagination-section');
const btnWatched = document.querySelector('.watched');
const btnQueued = document.querySelector('.queued');

const WATCHED = 'watched';
const QUEUE = 'queue';
// btns-container
const btnsContainer = document.querySelector('.btns-container');

btn.addEventListener('click', togglePages, { once: true });
btnsContainer.addEventListener('click', onBtnClick);

function togglePages(e) {
  e.preventDefault();

  const watchedParse = JSON.parse(localStorage.getItem(WATCHED));

  updateMarkup(watchedParse);

  btnContainer.classList.remove('visually-hidden');
  searchContainer.classList.add('visually-hidden');

  navbarLink.classList.remove('current');
  navbarBtn.classList.add('current');

  pagination.classList.add('visually-hidden');
}

function onBtnClick(e) {
  if (e.target === btnsContainer) return;

  const watchedParse = JSON.parse(localStorage.getItem(WATCHED));
  const queueParse = JSON.parse(localStorage.getItem(QUEUE));

  if (e.target.textContent === WATCHED) {
    updateMarkup(watchedParse);
    e.target.classList.add('active');
    btnQueued.classList.remove('active');
  } else {
    updateMarkup(queueParse);
    e.target.classList.add('active');
    btnWatched.classList.remove('active');
  }
}
function updateMarkup(storageType) {
  galleryRef.innerHTML = galleryMarkup(storageType);
}

//--------- check LS
if (localStorage.getItem('watched') === null) {
  localStorage.setItem('watched', JSON.stringify([]));
}

if (localStorage.getItem('queue') === null) {
  localStorage.setItem('queue', JSON.stringify([]));
}
