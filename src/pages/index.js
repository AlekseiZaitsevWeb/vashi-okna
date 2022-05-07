import './index.css';
import ItcSimpleSlider from "../components/simple-adaptive-slider";

// инициализация слайдера
const slider = new ItcSimpleSlider('.slider', {
  loop: true,
  autoplay: true,
  interval: 5000,
  swipe: false
});

// mobile menu
const menu = document.querySelector('.mobile-menu');
const navigation = document.querySelector('.mobile-menu__navigation');
const social = document.querySelector('.mobile-menu__social');
const logo = document.querySelector('.mobile-menu__logo');
const img = document.querySelector('.mobile-menu__img');
const btnMenu = document.querySelector('.header__mobile-menu-button');
btnMenu.addEventListener('click', () => {

  if (menu.classList.contains('mobile-menu_opened')) {
    document.removeEventListener("keydown", handleClose);
    menu.classList.remove('mobile-menu_opened');
  } else {
    document.addEventListener("keydown", handleClose);
    menu.classList.add('mobile-menu_opened');
  }
})

function handleClose(evt) {
  if (menu.classList.contains('mobile-menu_opened')) {

    if(evt.key === "Escape") {
      close();
    }
    if(evt.target !== btnMenu && evt.target !== menu && evt.target !== navigation && evt.target !== social && evt.target !== logo && evt.target !== img) {
      close();
    }
  } else {

  }
}

document.addEventListener("click", handleClose);

function close() {
  document.removeEventListener("keydown", handleClose);
  menu.classList.remove('mobile-menu_opened');
}

document.addEventListener("DOMContentLoaded", function(evt)
{
  window.onresize = function() {
    resize_info();
  };
});

function resize_info()
{
  const screenWidth = window.innerWidth;
  if(screenWidth > 841) {
    if (menu.classList.contains('mobile-menu_opened')) {
      close();
    }
  }
}

// const nodeList = (document.querySelectorAll('.slider__control_next'));
// let i = 0;
// nodeList.forEach(el => {
//   if(i > 0) {
//     el.remove();
//   }
//   i += 1;
// });
