import { Modal } from './modal-plugin';
import genres from './genres.json';
import { transfromGenres } from './genres';
import modalTemplate from '../templates/gallery-modal.hbs';
import { addToStorage } from './addToWatched';

const footerModal = new Modal('.footer-modal-container', '[data-footer-modal]');
footerModal.createModal();

const WATCHED = 'watched';
const QUEUE = 'queue';

const gallery = document.querySelector('.gallery');
const backdrop = document.querySelector('[data-card-modal]');
const modalContainer = document.querySelector('.modal__container');

gallery.addEventListener('click', openModal);
backdrop.addEventListener('click', onBackdropClick);

function openModal(e) {
  if (e.target === gallery) return;

  toggleClases();
  createModalContent(e);

  window.addEventListener('keydown', onEscPress);
}

function closeModal() {
  toggleClases();

  window.removeEventListener('keydown', onEscPress);
  document.querySelector('.close-button').removeEventListener('click', closeModal);

  modalContainer.removeChild(modalContainer.firstElementChild);
}
function onBackdropClick(e) {
  e.target === backdrop && closeModal();
}

function onEscPress(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function toggleClases() {
  backdrop.classList.toggle('visually-hidden');
  document.body.classList.toggle('footer-modal-open');
}

function createModalContent(e) {
  const selectedCard = e.composedPath().find(({ tagName }) => tagName === 'LI');
  const currentId = Number(selectedCard.dataset.id);

  const currentFilms = JSON.parse(sessionStorage.getItem('current-page'));
  const queuedFilms = JSON.parse(localStorage.getItem(QUEUE));
  const watchedFilms = JSON.parse(localStorage.getItem(WATCHED));

  for (const film of currentFilms) {
    if (film.id === currentId) {
      modalContainer.insertAdjacentHTML('afterbegin', modalTemplate(film));
      document.querySelector('.close-button').addEventListener('click', closeModal);

      document.querySelector('#watched').addEventListener('click', e => {
        for (const watchedFilm of watchedFilms) {
          if (film.id === watchedFilm.id) {
            e.currentTarget.textContent = 'Already in Watched List';
            e.currentTarget.disabled = true;
            e.currentTarget.style.background = 'var(--accent-color)';
            e.currentTarget.style.color = '#fff';
            return;
          }
        }
        watchedFilms.push(film);
        addToStorage(WATCHED, watchedFilms);

        e.currentTarget.textContent = 'Film added to watched';
      });
      document.querySelector('#queue').addEventListener('click', e => {
        for (const queuedFilm of queuedFilms) {
          if (film.id === queuedFilm.id) {
            e.currentTarget.textContent = 'Already in Queued List';
            e.currentTarget.disabled = true;
            e.currentTarget.style.background = 'var(--accent-color)';
            e.currentTarget.style.color = '#fff';
            return;
          }
        }
        queuedFilms.push(film);
        addToStorage(QUEUE, queuedFilms);

        e.currentTarget.textContent = 'Film added to queue';
      });

      modalContainer.querySelector('#genres').textContent = transfromGenres(genres, film.genre_ids);
      break;
    }
  }
}
