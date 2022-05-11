import { Modal } from './modal-plugin';
import genres from './genres.json';
import { helperFn } from './genres';
import modalTemplate from '../templates/gallery-modal.hbs';

const footerModal = new Modal('.footer-modal-container', '[data-footer-modal]');
footerModal.createModal();

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

export function closeModal() {
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

  const films = JSON.parse(sessionStorage.getItem('current-page'));
  for (const film of films) {
    if (film.id === currentId) {
      modalContainer.insertAdjacentHTML('afterbegin', modalTemplate(film));
      document.querySelector('.close-button').addEventListener('click', closeModal);

      modalContainer.querySelector('#genres').textContent = transfromGenres(genres, film.genre_ids);
      break;
    }
  }
}
