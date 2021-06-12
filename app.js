/* ===== MENU SHOW ===== */
let toggle = document.getElementById('nav-toggle')
let menu = document.getElementById('nav-menu')

toggle.addEventListener('click', () => {
    menu.classList.toggle('show')
})

// Remove menu when user click on the link
let navLink = document.querySelectorAll('.nav__link')
let navMenu = document.getElementById('nav-menu');

function linkAction() {
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//remove menu when user click outside menu
window.addEventListener('scoll', () => {
    menu.classList.remove('show')
})

