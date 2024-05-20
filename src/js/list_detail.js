import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import "../css/list_detail.css";

import { fetchPost, postDetailTemplate, postId, detailTop, contWrap } from './module/listDetailContent';
import { detailScrollShow, topBtnScroll } from "./module/scroll";
import Swiper from 'swiper';
import { swiperMethod2, modules } from './module/swiper';
import { historyBack, copyBtnClick } from './module/common';


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

    const foldBtn = document.querySelector('.fold-btn');
    const foldBtn2 = document.querySelector(".fold-btn2");
    const productList = document.querySelector(".product--list");
    const info = document.querySelector(".info-p");

    foldBtn.addEventListener('click', async (e) => {
      e.preventDefault()
      console.log(e.target)
      productList.classList.toggle("fold")
      
      productList.classList.contains("fold") 
        ? foldBtn.innerText = '접기' 
        : foldBtn.innerText = '펼쳐보기'
    })

    
    const foldInner = (currentText) => {
      foldBtn2.innerText = currentText;
    }

    const foldInit = () => {
      const infoPStyle = getComputedStyle(info).height;
      const infoHeightReplace = Number(infoPStyle.replace('px', ''));
      let infoMinHeight = 54;
      
      // console.log(infoHeightReplace)

      if (infoHeightReplace <= infoMinHeight) {
        foldInner('');
        info.classList.remove('line3');
        console.log(1)
      }else if(infoHeightReplace > infoMinHeight){
        foldInner('펼쳐보기');
        console.log(2)
        info.classList.add('line3');
        foldBtn2.addEventListener("click", (e) => {
          e.preventDefault();
          console.log(e.target)
  
          info.classList.toggle('fold');

          if(info.classList.contains("fold")) {
            info.classList.remove('line3');
            foldInner('접기');
          }else {
            info.classList.add('line3');
            foldInner('펼쳐보기');
          }
        })
      }
    }
    foldInit();
  }); 

  historyBack();
  detailScrollShow();
  topBtnScroll();
  copyBtnClick();

  // foldButton.addEventListener('click', async (e) => {
  //   e.preventDefault()
  //   productList.classList.toggle("fold")
  //   productList.classList.contains("fold") ? '접기' : '펼쳐보기';
  // })


}, false)
window.addEventListener("resize", async () => {
  await fetchPost(postId).then(post => {
    detailTop.innerHTML = swiperTopTemplate(post);
  });
})
