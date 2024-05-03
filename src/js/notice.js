import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import "../css/notice.css";

import Swiper from 'swiper';
import { swiperMethod, modules } from './module/swiper';
import { historyBack } from './module/common';


window.addEventListener("DOMContentLoaded", () => {
  Swiper.use(modules);
  const swiper = new Swiper(".mySwiper", swiperMethod);
  
  historyBack();
})
