import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import "../css/app.css";

import Swiper from 'swiper';
import { swiperMethod, modules } from './swiper';

import { setCookie, getCookie, on_close_modal, cookieDelete } from "./cookie";

const closeBtn = document.querySelector(".close");
const $ipt = document.getElementById('hide-24');

document.addEventListener("DOMContentLoaded", async () => {

  await getCookie();
  closeBtn.addEventListener("click",on_close_modal);
  $ipt.addEventListener("click", cookieDelete);

  await function cookieDelete() {
    setCookie(modalName, "done", 1);
  }

  Swiper.use(modules);
  const swiper = new Swiper(".mySwiper", swiperMethod);

})


