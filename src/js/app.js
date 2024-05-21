import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import "../css/app.css";

import { navList, render as nav } from './components/_nav';
import { FooterComponent as footer } from './components/_footer';
import Swiper from 'swiper';
import { swiperMethod, modules, swiperMethod2 } from './module/swiper';
import { tabItem, tabHandler } from './module/common';
import { 
  fetchPost as noticeFetch,
  noticeTemplate,
  noticeUl
} from './module/noticeData';
import { 
  fetchPost as listFetch, 
  listTemplate, 
  listUl, 
} from './module/listData';

import { setCookie, getCookie, on_close_modal, cookieDelete } from "./module/cookie";

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
  const swiper2 = new Swiper(".mySwiper4", swiperMethod);


  navList;
  nav();

  customElements.define('app-footer', footer);

  // notice data
  await noticeFetch().then(posts => {
      noticeUl.innerHTML = posts.map(post => noticeTemplate(post)).join('')
    })
    .catch(err => console.log(err))

  // list data
  await listFetch().then(posts => {
      listUl.innerHTML = posts.map(post => listTemplate(post)).join('');
    })
    .catch(err => console.log(err))

})


