(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-footer-modal-open]"),
        closeModalBtn: document.querySelector("[data-footer-modal-close]"),
        modal: document.querySelector("[data-footer-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal(e) {
        e.preventDefault();
        document.body.classList.toggle("footer-modal-open");
        refs.modal.classList.toggle("visually-hidden");
    }
})();