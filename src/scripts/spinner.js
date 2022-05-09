function onAsyncSpinner() {

    const refs = {
        spinner: document.querySelectorAll('.spinner-backdrop'),
    };

    refs.spinner.forEach(spinner => {
        const stopSpinner = spinner.nextElementSibling.firstElementChild;
        stopSpinner.addEventListener('load', onSpinnerStop);

        function onSpinnerStop() {
            spinner.classList.add('visually-hidden');
        };
    });
}

export { onAsyncSpinner };