import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import "../css/order.css";

import { navList, render as nav } from './components/_nav';
import Swiper from 'swiper';
import { swiperMethod, modules } from './swiper';
import { topBtnScroll, scrollShow } from './common';

window.addEventListener("DOMContentLoaded", () => {
  Swiper.use(modules);
  const swiper = new Swiper(".mySwiper", swiperMethod);

  navList;
  nav();
  topBtnScroll();
  scrollShow();

})