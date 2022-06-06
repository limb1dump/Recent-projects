//burger menu

const burger = document.querySelector('#burger');
const popUp = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);
const burgerField = document.querySelector('#burger-field');
const body = document.querySelector('body');

const renderPopUp = () => {
    popUp.appendChild(menu);
}

const burgerHandler = (event) => {
    event.preventDefault();
    popUp.classList.toggle('_open');
    burgerField.classList.toggle('_active');
    body.classList.toggle('_noscroll');
    renderPopUp();
}

burger.addEventListener('click', burgerHandler)


//navbar shadow onscroll
const navigation = document.querySelector('#nav');

const addShadow = () => {
    if (window.scrollY > 22) {
        navigation.classList.add('_scrolled')
    } else {
        navigation.classList.remove('_scrolled')
    }
}
window.addEventListener('scroll', addShadow);