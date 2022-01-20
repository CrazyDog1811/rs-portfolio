import i18Obj from './js/translate.js';

const langs = document.querySelector('.switch-lng');
const radioLang = langs.querySelectorAll('[data-i18]');

const burger = document.querySelector('.hamburger');
const adaptMenu = document.querySelector('.ul-nav');

const theme = document.querySelector('.theme');
let isDark = true;
let lang = 'en';

const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioImages = document.querySelectorAll('.port-img');
const seasons = ['winter', 'spring', 'summer', 'autumn'];
const btns = portfolioBtns.querySelectorAll('.portfolio-btn');

const closeMenu = (ev) => {
    if (ev.target.classList.contains('nav-link')) {
        burger.classList.remove('is-active');
        adaptMenu.classList.remove('open');
    }
}

const changeImage = (ev) => {
    if (ev.target.classList.contains('portfolio-btn') && !ev.target.classList.contains('checked')) {
        btns.forEach(el => el.classList.remove('checked'));
        changeClassOfElement(ev.target, 'checked');
        const season = ev.target.dataset.season;
        portfolioImages.forEach((img, index) => {
            img.src = `./assets/img/images/${season}/${index + 1}.jpg`;
            console.log(img);
        });
    }
}

const preloadImages = () => {
    seasons.forEach((el) => {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/images/${el}/${i}.jpg`;
        }
    });
}

const changeTheme = () => {
    if (isDark) {
        document.documentElement.style.setProperty('--body-color', '#fff');
        document.documentElement.style.setProperty('--text-color', '#000');
        document.documentElement.style.setProperty('--line-color', '#000');
        document.documentElement.style.setProperty('--portf-hover-color', 'gold')
        isDark = false;
    } else {
        document.documentElement.style.setProperty('--body-color', '#000');
        document.documentElement.style.setProperty('--text-color', '#fff');
        document.documentElement.style.setProperty('--line-color', '#bdae82');
        document.documentElement.style.setProperty('--portf-hover-color', '#fff')
        isDark = true;
    }
}

const changeClassOfElement = (el, className) => {
    el.classList.add(className);
}

preloadImages();

const getTranslate = (langPar) => {
    const elems = document.querySelectorAll('[data-i18]');
    elems.forEach((el) => el.textContent = i18Obj[langPar][el.dataset.i18]);
}

const setLocalStorage = () => {
    localStorage.setItem('lang', lang);
    localStorage.setItem('isDark', isDark);
}

const getLocalStorage = () => {
    if(localStorage.getItem('lang')) {
        lang = localStorage.getItem('lang');
        getTranslate(lang);
    }
    if(localStorage.getItem('isDark')) {
        isDark = localStorage.getItem('isDark');
        changeTheme();
    }
}

langs.addEventListener('click', (ev) => {
    if (ev.target.hasAttribute('data-i18')) {
        radioLang.forEach(el => el.classList.remove('selected'));
        changeClassOfElement(ev.target, 'selected');
    }
    lang = ev.target.dataset['i18'];
    lang = lang ? lang : 'en';
    getTranslate(lang);
})
burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    adaptMenu.classList.toggle('open');
})
adaptMenu.addEventListener('click', closeMenu);
portfolioBtns.addEventListener('click', changeImage);
theme.addEventListener('click', changeTheme);
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage)

const h1style = [
    'padding: 5px 180px;',
    'background: linear-gradient( gold, orangered);',
    'text-shadow: 0 2px orangered;',
    'font: 1.3rem/3 Georgia;',
    'color: white;'
].join('');

const warn = [
    'background: red;',
    'color: white;',
    'padding: 0 10px;'
].join('');

const textStyle = [
    'background: linear-gradient(lightblue , blue);',
    'color: black;',
    'padding: 0 10px;'
].join('');

const text = '%c1. %c Вёрстка соответствует макету. Ширина экрана 768px %c+48\n a)%cблок <header>   %c+6\n b)%cсекция hero     %c+6\n c)%cсекция skills   %c+6\n d)%cсекция portfolio%c+6\n e)%cсекция video    %c+6\n f)%cсекция price    %c+6\n g)%cсекция contacts %c+6\n h)%cблок <footer>   %c+6\n\n2. %cНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки%c+15\n a)%cнет полосы прокрутки при ширине страницы от 1440рх до 768рх %c+5\n b)%cнет полосы прокрутки при ширине страницы от 768рх до 480рх  %c+5\n d)%cнет полосы прокрутки при ширине страницы от 480рх до 320рх  %c+5\n\n3. %c На ширине экрана 768рх и меньше реализовано адаптивное меню    %c+22\n a)%cпри ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка %c+2\n b)%cпри нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик %c+4\n d)%cвысота адаптивного меню занимает всю высоту экрана.\n    При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана %c+4\n e)%cпри нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку %c+4\n f)%cбургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений%c+2\n g)%cссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям%c+2\n h)%cпри клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку%c+4';

console.log('%c%s', warn, 'деплой на netlify, т.к. нет доступа к приватному репозиторию в регионе');
console.log('%c%s', h1style, 'Самооценка:  75');
console.log(text, warn, textStyle, warn, textStyle, warn, textStyle, warn, textStyle, warn, textStyle, warn, textStyle, warn, textStyle, warn, textStyle, warn, textStyle, warn, textStyle, warn, textStyle, warn, textStyle, warn, textStyle, warn, textStyle, warn, textStyle, warn, textStyle, warn, textStyle, warn, textStyle, warn, textStyle, warn, textStyle, warn, textStyle, warn);