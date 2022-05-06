import './index.css';
import ItcSimpleSlider from "../components/simple-adaptive-slider";

// инициализация слайдера
const slider = new ItcSimpleSlider('.slider', {
  loop: true,
  autoplay: true,
  interval: 5000,
  swipe: false
});

const nodeList = (document.querySelectorAll('.slider__control_next'));
let i = 0;
nodeList.forEach(el => {
  if(i > 0) {
    el.remove();
  }
  i += 1;
});
