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


// Альтернативный вариант, если первый не сработает:

// export default class Spinner {
//     constructor(spinner) {
//         this.spinner = document.querySelector('.spinner-backdrop')
//     };

//     addSpinner() {
//         this.spinner.classList.remove('visually-hidden');
//     };

//     closeSpinner() {
//         this.spinner.classList.add('visually-hidden');
//     };
// };