import { Modal } from './modal-plugin';

const cardModal = new Modal('.gallery', '[data-card-modal]');
cardModal.createModal();
const footerModal = new Modal('.footer-modal-container', '[data-footer-modal]');
footerModal.createModal();
