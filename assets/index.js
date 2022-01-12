const burger = document.querySelector('.hamburger');
const adaptMenu = document.querySelector('.ul-nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    adaptMenu.classList.toggle('open');
})

const closeMenu = (ev) => {
    if(ev.target.classList.contains('nav-link')) {
        burger.classList.remove('is-active');
        adaptMenu.classList.remove('open'); 
    }
}

adaptMenu.addEventListener('click', closeMenu);
