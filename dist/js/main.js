const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
    debugger;
    if (!showMenu) {
        hamburger.classList.add('open');
        showMenu = true;
        return
    }
    hamburger.classList.remove('open');
    showMenu = false;
}