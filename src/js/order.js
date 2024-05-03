import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import "../css/order.css";

import { navList, render as nav } from './components/_nav';
import Swiper from 'swiper';
import { swiperMethod, modules } from './module/swiper';
import { topBtnScroll, orderScrollShow } from './module/scroll';
import { calendar, datepicker, badgeGenerate, orderCalendar } from './module/calendar';
import { orderDateBtn, chargeSelectBtn, officeQnaBtn, colorFilterBtn, pointBtn, colorBtn, informBtn, orderAccept, memoBtn, closeBtn, cancelBtn } from './module/popup';

window.addEventListener("DOMContentLoaded", () => {

  Swiper.use(modules);
  const swiper = new Swiper(".mySwiper", swiperMethod);

  navList;
  nav();
  topBtnScroll();
  orderScrollShow();

  calendar;
  datepicker();
  badgeGenerate();
  orderCalendar();
})