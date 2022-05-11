const refs = {
  header: document.querySelector('.header'),
  bgHome: document.querySelector('#bg-1'),
  bgLibrary: document.querySelector('#bg-2'),
  logoLink: document.querySelector('.logo'),
  home: document.querySelector('#home'),
  library: document.querySelector('#library'),
  formContainer: document.querySelector('.search-container'),
  btnsContainer: document.querySelector('.btns-container'),
  btnWatched: document.querySelector('.watched'),
  btnQueued: document.querySelector('.queued'),
};
// смена фона
refs.library.addEventListener('click', function (bgChange) {
  bgChange.preventDefault();
  refs.bgHome.classList.add('transparent');
  refs.bgLibrary.classList.add('bg-2');
});
