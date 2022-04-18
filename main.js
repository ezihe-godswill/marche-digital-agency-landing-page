import './style.css'

const MENUBUTTON = document.querySelector(".menu-toggle");
const MENU = document.querySelector(".header-nav");

const toggleMenu = () => {
  MENUBUTTON.classList.toggle("open");
  MENU.classList.toggle("open")
}

MENUBUTTON.addEventListener("click", toggleMenu);