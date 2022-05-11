const galleryRef = document.querySelector('.gallery');
const btn = document.querySelector('.navbar-item_btn');
const btnContainer = document.querySelector('.btns-container');
const searchContainer = document.querySelector('.search-form');
const navbarLink = document.querySelector('.navbar-item_link');
const navbarBtn = document.querySelector('.navbar-item_btn');
const pagination = document.querySelector('.pagination-section');
const btnWatched = document.querySelector('.watched');
const btnQueued = document.querySelector('.queued');

// btns-container

btn.addEventListener('click', togglePages, { once: true });
btnQueued.addEventListener('click', activeBtn);
btnWatched.addEventListener('click', activeBtn);

function togglePages(e) {
  e.preventDefault();

  galleryRef.innerHTML = '';
  galleryRef.insertAdjacentHTML('beforebegin', '<span>Sorry, pusto</span>');
  btnContainer.classList.remove('visually-hidden');
  searchContainer.classList.add('visually-hidden');

  navbarLink.classList.remove('current');
  navbarBtn.classList.add('current');

  pagination.classList.add('visually-hidden');
}

function activeBtn() {
  if ((btnWatched.contains = 'active')) {
    btnQueued.classList.toggle('active');
  }
  if ((btnQueued.contains = 'active')) {
    btnWatched.classList.toggle('active');
  }
}
