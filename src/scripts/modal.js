const refs = {
  gallery: document.querySelector('.gallery'),
  closeBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  backdrop: document.querySelector('.backdrop'),
};

refs.gallery.addEventListener('click', openModal);
refs.closeBtn.addEventListener('click', closeModal);
refs.backdrop.addEventListener('click', onBackdrop);

function openModal(e) {
  if (e.target === refs.gallery) return;

  refs.modal.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscPress);
}

function onBackdrop(e) {
  e.target === refs.backdrop && closeModal();
}

function closeModal() {
  window.removeEventListener('keydown', onEscPress);

  refs.modal.classList.add('is-hidden');
}

function onEscPress(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}
