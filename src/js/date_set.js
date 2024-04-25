import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import "../css/date_set.css";

import { navList, render } from './components/_nav';
import { tabItem, tabHandler } from './common';
import { calendar, datepicker, badgeGenerate } from './date';
import Swiper from 'swiper';
import { swiperMethod, modules } from './swiper';

window.addEventListener('DOMContentLoaded', () => {

  console.log(window.location.pathname)

  tabItem.forEach(item => {
    item.addEventListener("click", tabHandler);
  });

  calendar;
  datepicker();
  badgeGenerate();
  calendar.on('render', (ui) => {
    badgeGenerate();
  });

  Swiper.use(modules);
  const swiper = new Swiper(".mySwiper", swiperMethod);

  navList;
  render();
  
})