export class Modal {
  constructor(selector = {}, backdrop = {}) {
    this.refs = this.getRefs(selector, backdrop);
  }
  getRefs(selector, backdrop) {
    const refs = {};
    refs.container = document.querySelector(selector);
    refs.backdrop = document.querySelector(backdrop);
    refs.closeButton = refs.backdrop.querySelector('[data-modal-close]');

    return refs;
  }
  createModal() {
    this.refs.container.addEventListener('click', this.openModal.bind(this));

    this.refs.closeButton.addEventListener('click', this.closeModal.bind(this));

    this.refs.backdrop.addEventListener('click', this.onBackdropClick.bind(this));
  }
  openModal(e) {
    e.preventDefault();

    if (e.target === this.refs.container) return;

    window.addEventListener('keydown', this.onEscPress.bind(this));

    this.refs.backdrop.classList.remove('visually-hidden');
  }
  closeModal() {
    window.removeEventListener('keydown', this.onEscPress.bind(this));
    this.refs.backdrop.classList.add('visually-hidden');
  }
  onBackdropClick(e) {
    e.target === this.refs.backdrop && this.closeModal();
  }
  onEscPress(e) {
    if (e.code === 'Escape') {
      this.closeModal();
    }
  }
}
