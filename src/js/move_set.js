import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import "../css/move_set.css";

import { historyBack } from "./module/common";
import Swiper from 'swiper';
import { swiperMethod, modules } from './module/swiper';

import { yearSelect } from './module/input';
import { closeDaumPostcode, sample2_execDaumPostcode, initLayerPosition, postBtn } from './module/address';



window.addEventListener("DOMContentLoaded", () => {
  historyBack();
  Swiper.use(modules);
  const swiper = new Swiper(".mySwiper", swiperMethod);
  postBtn.addEventListener("click", sample2_execDaumPostcode)
  initLayerPosition();
  closeDaumPostcode();
})

window.addEventListener("load", () => {
  yearSelect();
})




