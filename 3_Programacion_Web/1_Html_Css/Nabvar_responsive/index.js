let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.nav__list')

menu.onclick = () => {
    menu.classList.toggle('nav__toggle-btn');
    navlist.classList.toggle('open');
}