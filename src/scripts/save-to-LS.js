const galleryRef = document.querySelector('.gallery');
const btn = document.querySelector('.navbar-item_btn');

// btns-container

btn.addEventListener('click', togglePages);

function togglePages(e) {
  e.preventDefault();

  galleryRef.innerHTML = '<div class=warn>ThereIsNoSpoon</div>';
}
