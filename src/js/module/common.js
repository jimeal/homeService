const returnBtn = document.querySelector('.btn--return');
const tabItem = document.querySelectorAll(".tab-container__item");
const tabContent = document.querySelectorAll(".content-container__content");


const historyBack = () => {
  returnBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.history.back();
  })
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


// 텍스트 복사 
const copyText = document.querySelector(".copy-text");
const copyBtn = document.querySelector(".copy");

const copyBtnClick = () => {
  copyBtn.addEventListener("click", async () => {
      try {
          await window.navigator.clipboard.writeText(copyText.innerText).then(() => {
                  alert(' 복사완료!')
              })
      } catch (e) {
          console.log(e);
      }
  })
}


// 업체상품 펼처보기
const productList = document.querySelector(".product--list");
const infoP = document.querySelector(".info-p");
const foldButton = document.querySelector(".fold-btn");
const foldButto2 = document.querySelector(".fold-btn2");

const foldBtnClick = () => {
  foldButton.addEventListener("click", (e) => {
      e.preventDefault();
      productList.classList.toggle("fold")
      console.log(e.target)
      if(productList.classList.contains("fold")) {
          foldButton.innerText = '접기';
      }else {
          foldButton.innerText = '펼쳐보기';
      }
  })

  //업체정보 펼쳐보기
  foldButto2.addEventListener("click", (e) => {
      e.preventDefault();
      infoP.classList.remove('line3');
      infoP.classList.toggle('fold');

      if(infoP.classList.contains("fold")) {
          foldButto2.innerText = '접기'
      }else {
          foldButto2.innerText = '펼쳐보기';
      }
  })
}

export { historyBack, tabHandler, copyBtnClick, foldBtnClick, tabItem }