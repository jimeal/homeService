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
const foldBtnClick = async () => {
  const foldBtn = document.querySelector('.fold-btn');
  const foldBtn2 = document.querySelector(".fold-btn2");
  const productList = document.querySelector(".product--list");
  const info = document.querySelector(".info-p");

    await foldBtn.addEventListener('click', async (e) => {
      e.preventDefault()
      productList.classList.toggle("fold")
      
      productList.classList.contains("fold") 
        ? foldBtn.innerText = '접기' 
        : foldBtn.innerText = '펼쳐보기'
    })

    
    const foldInner = (currentText) => {
      foldBtn2.innerText = currentText;
    }
    const foldInit = async () => {
      const infoPStyle = getComputedStyle(info).height;
      const infoHeightReplace = Number(infoPStyle.replace('px', ''));
      let infoMinHeight = 54;
      
      if (infoHeightReplace <= infoMinHeight) {
        foldInner('');
        info.classList.remove('line3');
      }else if(infoHeightReplace > infoMinHeight){
        foldInner('펼쳐보기');
        info.classList.add('line3');
        await foldBtn2.addEventListener("click", (e) => {
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
}

export { historyBack, tabHandler, copyBtnClick, foldBtnClick, tabItem }