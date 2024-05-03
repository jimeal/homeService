const partnerButton = document.querySelector(".partner-btn");
const topButton = document.querySelector("#top-btn");
const headerEl = document.querySelector("header");
const coverWrap = document.querySelector(".cover-wrap");
const returnButton = document.querySelector(".btn--return img");
const shareButton = document.querySelector(".share-btn");
const homeButton = document.querySelector(".home-btn");
const contWrap = document.querySelector(".cont-wrap");

// 탑버튼
const topBtnScroll = () => {
  topButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
  })
}

let scrollNum = 0;
let documentHeight = 0;
const coverHeight = window.innerHeight / 2;

// 오더 스크롤시 헤더 탑버튼
const orderScrollShow = () => {
  window.addEventListener("scroll", () => {
    scrollNum = window.scrollY;
    documentHeight = document.body.scrollHeight + coverHeight - window.innerHeight;
    
    if(scrollNum >= coverHeight) {
        headerEl.classList.add('fixed');
        topButton.style.display = "block";
        partnerButton.style.display = "block"

    }else {
        headerEl.classList.remove('fixed');
        topButton.style.display = "none";
        partnerButton.style.display = "none";
    }

  });
}

// 스크롤시 헤더 탑버튼
const detailScrollShow = () => {
  window.addEventListener("scroll", () => {
    scrollNum = window.scrollY;
    documentHeight = document.body.scrollHeight + coverHeight - window.innerHeight;
    
    if(scrollNum >= coverHeight) {
        headerEl.classList.add('fixed');
        returnButton.src = './assets/return.png';
        shareButton.src = './assets/ico-share-b.png';
        homeButton.src = './assets/ico-home-b.png';
        topButton.style.display = "block";
        partnerButton.style.display = "block"

    }else {
        headerEl.classList.remove('fixed');
        returnButton.src = './assets/return-w.png';
        shareButton.src = './assets/ico_share.png';
        homeButton.src = './assets/ico_home.png';
        topButton.style.display = "none";
        partnerButton.style.display = "none";
    }

  });
}

export { orderScrollShow, detailScrollShow, topBtnScroll }