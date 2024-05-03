import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import "../css/list_detail.css";

import { detailScrollShow, topBtnScroll } from "./module/scroll";
import Swiper from 'swiper';
import { swiperMethod2, modules } from './module/swiper';
import { historyBack, copyBtnClick, foldBtnClick } from './module/common';


window.addEventListener("DOMContentLoaded", () => {

  historyBack();
  Swiper.use(modules);
  const swiper = new Swiper(".mySwiper2", swiperMethod2);

  detailScrollShow();
  topBtnScroll();
  historyBack();
  copyBtnClick();
  foldBtnClick();
})