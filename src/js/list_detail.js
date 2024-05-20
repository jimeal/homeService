import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import "../css/list_detail.css";

import { fetchPost, postDetailTemplate, postId, detailTop, contWrap } from './module/listDetailContent';
import { detailScrollShow, topBtnScroll } from "./module/scroll";
import Swiper from 'swiper';
import { swiperMethod2, modules } from './module/swiper';
import { historyBack, copyBtnClick, foldBtnClick } from './module/common';


const swiperTopTemplate = async (post) => {
  Swiper.use(modules);
  const swiper = new Swiper(".mySwiper2", swiperMethod2);
  
  const postImgLength = `${post.image.length}`;
  const imageArr = await new Array();
  
  for(let i = 0; i < postImgLength; i++) {
    const postImg = `${post.image[i]}`;
    imageArr.push(postImg)
  }

  const swiperTemp = imageArr.map((el) => {
    // console.log(el)
    return `
     <div class="swiper-slide">
      <img src="${el}" alt="">
     </div>
    `
  }).join('');

  detailTop.innerHTML = swiperTemp;
  
}

window.addEventListener("DOMContentLoaded", async () => {

  await fetchPost(postId).then((post) => {
    detailTop.innerHTML = swiperTopTemplate(post);
    contWrap.insertAdjacentHTML('afterbegin', postDetailTemplate(post))

    foldBtnClick();
    
  }).catch(err => {
    console.log(err)
  });
  
  historyBack();
  detailScrollShow();
  topBtnScroll();
  copyBtnClick();

}, false)
window.addEventListener("resize", async () => {
  await fetchPost(postId).then(post => {
    detailTop.innerHTML = swiperTopTemplate(post);
  }).catch(err => {
    console.log(err)
  });
})
