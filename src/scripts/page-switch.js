const refs={
divBg:document.querySelector('#bg-top'),
bg2:document.querySelector('.bg-2'),
logoLink:document.querySelector('.logo'),
home:document.querySelector('#home'),
library:document.querySelector('#library'),
formContainer:document.querySelector('.search-container'),
btnsContainer:document.querySelector('.btns-container'),
btnWatched:document.querySelector('.watched'),
btnQueued:document.querySelector('.queued'),
}
// смена фона
refs.library.addEventListener('click', function(bgChange) {
    bgChange.preventDefault();
    refs.bg2.classList.remove('visually-hidden');
    refs.divBg.classList.remove('bg-1');
})

// при клике на лого обновит страницу и покажет первый фон и инпут
refs.logo.addEventListener('click', function(mainPage) {
     mainPage.preventDefault();
    refs.formContainer.classList.remove('visually-hidden');
    refs.btnsContainer.classList.add('visually-hidden');
})


