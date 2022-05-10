const refs={
header:document.querySelector('.header'),
bgHome:document.querySelector('#bg-1'),
bgLibrary:document.querySelector('#bg-2'),
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
    refs.bgHome.classList.add('transparent');
    refs.bgLibrary.classList.add('bg-2');
    
})
// refs.home.addEventListener('click', function(bgChange) {
//     bgChange.preventDefault();
//     refs.bgLibrary.classList.remove('bg-2');
//     refs.bgHome.classList.remove('transparent');
       
// })


// при клике на лого обновит страницу и покажет первый фон и инпут
refs.logo.addEventListener('click', function(mainPage) {
     mainPage.preventDefault();
    refs.formContainer.classList.remove('visually-hidden');
    refs.btnsContainer.classList.add('visually-hidden');
})


