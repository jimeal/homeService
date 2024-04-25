const headerEl = document.querySelector("header");
const returnBtn = document.querySelector('.btn--return');
const tabItem = document.querySelectorAll(".tab-container__item");
const tabContent = document.querySelectorAll(".content-container__content");
const partnerButton = document.querySelector(".partner-btn");
const topButton = document.querySelector("#top-btn");

// 되돌아가기
const historyBack = e => {
    e.preventDefault();
    window.history.back();
}

//탭
const tabHandler = item => {
  const tabTarget = item.currentTarget;
  const target = tabTarget.dataset.tab;
  tabItem.forEach((title) => {
    title.classList.remove("active");
  });
  tabContent.forEach((target) => {
    target.classList.remove("target");
  });
  document.querySelector("#" + target).classList.add("target");
  tabTarget.classList.add("active");
}

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

// 스크롤시 헤더 탑버튼
const scrollShow = () => {
  window.addEventListener("scroll", () => {
    scrollNum = window.scrollY;
    documentHeight = document.body.scrollHeight + coverHeight - window.innerHeight;
    
    if(scrollNum >= coverHeight) {
        headerEl.classList.add('fixed');
        topButton.style.display = "block";
        partnerButton.style.display = "block"

    }else {
        headerEl.classList.remove('fixed')
        topButton.style.display = "none";
        partnerButton.style.display = "none";
    }

  });
}

export { historyBack, tabHandler, returnBtn, tabItem, topBtnScroll, scrollShow }