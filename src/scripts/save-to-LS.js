const galleryRef = document.querySelector('.gallery');
const btn = document.querySelector('.navbar-item_btn');
const btnContainer = document.querySelector('.btns-container');
const searchContainer = document.querySelector('.search-form');

// btns-container

btn.addEventListener('click', togglePages);

function togglePages(e) {
  e.preventDefault();

  galleryRef.innerHTML = '<div class=warn>ThereIsNoSpoon</div>';
  btnContainer.classList.remove('visually-hidden');
  searchContainer.classList.add('visually-hidden');
}
