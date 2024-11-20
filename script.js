const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.Barra_navegação');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('ativo');
}