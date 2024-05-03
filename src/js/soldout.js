import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import "../css/soldout.css";

import { render } from './components/_nav';
import { calendar, datepicker, badgeGenerate } from './module/calendar';
import Swiper from 'swiper';
import { swiperMethod, modules } from './module/swiper';

window.addEventListener("DOMContentLoaded", () => {

  Swiper.use(modules);
  const swiper = new Swiper(".mySwiper", swiperMethod);

  render();
})