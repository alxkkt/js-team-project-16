const refs = {
  gallery: document.querySelector('.gallery'),
  modal: document.querySelector('[data-modal]'),
};

refs.gallery.addEventListener('click', openModal);
refs.modal.addEventListener('click', closeModal);

function openModal(e) {
  console.dir(e.target);
  if (e.target.parentNode.className !== 'film__item' && e.target.nodeName !== 'P') return;

  refs.modal.classList.remove('is-hidden');
}

function closeModal(e) {
  if (e.target !== refs.modal && e.target.nodeName !== 'svg' && e.target.nodeName !== 'use') return;

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      refs.modal.classList.add('is-hidden');
    }
  });

  refs.modal.classList.add('is-hidden');
}
