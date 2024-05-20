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

  tabItem.forEach(item => {
    item.addEventListener("click", tabHandler);
  });

  navList;
  nav();

  customElements.define('app-footer', footer);

  // notice data
  noticeFetch().then(posts => {
      noticeUl.innerHTML = posts.map(post => noticeTemplate(post)).join('')
      // console.log(posts.length === posts[posts.length - 1].id);
      // console.log(posts)
    })
    .catch(err => console.log(err))
  // list data
  listFetch().then(posts => {
      // listUl.insertAdjacentHTML(
      //   'afterend', posts.map(post => {
      //     listTemplate(post)
      //   }).join('')
      // )
      listUl.innerHTML = posts.map(post => listTemplate(post)).join('');
      console.log(posts)
    })
    .catch(err => console.log(err))

})


