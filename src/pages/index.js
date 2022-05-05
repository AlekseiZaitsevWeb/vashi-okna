import './index.css';
import ItcSimpleSlider from "../components/simple-adaptive-slider";

// инициализация слайдера
const slider = new ItcSimpleSlider('.slider', {
  loop: true,
  autoplay: true,
  interval: 5000,
  swipe: false
});

