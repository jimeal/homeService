import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import "../css/notice.css";

import { fetchPost as dataFetchPost, noticeTemplate, noticeUl } from './module/noticeData';
import Swiper from 'swiper';
import { swiperMethod, modules } from './module/swiper';
import { historyBack } from './module/common';

window.addEventListener("DOMContentLoaded", () => {
  Swiper.use(modules);
  const swiper = new Swiper(".mySwiper", swiperMethod);
  
  historyBack();

  // notice data
  dataFetchPost().then(posts => {
    noticeUl.innerHTML = posts.map(post => noticeTemplate(post)).reverse().join('')
  }) 
  

})
