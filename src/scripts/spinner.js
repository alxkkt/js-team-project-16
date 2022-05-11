export default class Spinner {
  constructor(spinner) {
    this.spinner = document.querySelector('.spinner-backdrop');
  }

  addSpinner() {
    this.spinner.classList.remove('visually-hidden');
  }

  closeSpinner() {
    this.spinner.classList.add('visually-hidden');
  }
}
