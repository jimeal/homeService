const colorSelectPopup = document.querySelector(".color-select");
const colorBtn = document.querySelectorAll(".color-btn");
const closeBtn = document.querySelectorAll(".close");
const cancelBtn = document.querySelectorAll('.cancel-btn');
const popupBg = document.querySelector(".popup-bg");
const popup = document.querySelector(".popup-slideup");
const articlePopup = document.querySelector(".article-select");
const informPopup = document.querySelector('.popup-inform');
const informBtn = document.querySelector('.inform-btn');
const orderAccept = document.querySelector('.order-accept');
const articleSelect = document.querySelector('.article-select')
const memoBtn = document.querySelector(".memo-btn");
const memoPopup = document.querySelector(".popup-memo");
const pointBtn = document.querySelector('.point-btn');
const orderCharge = document.querySelector('.order-charge');
const chargeSelectBtn = document.querySelector('.charge-select-btn');
const chargeSelectPopup = document.querySelector('.charge-select');
const officeQnaBtn = document.querySelector('.office-qna-btn');
const popupQna = document.querySelector('.popup-qna');
const popupCalendar = document.querySelector(".popup-calendar");  
const orderDateBtn = document.querySelector(".order-date-btn");
const colorFilterBtn = document.querySelector(".color-filter-btn");

orderDateBtn.addEventListener("click", () => {
  popupCalendar.style.display = "block";
  popupBg.style.display = "block";
})

chargeSelectBtn.addEventListener("click", () => {
  chargeSelectPopup.style.bottom = 0;
  popupBg.style.display = "block";
})

officeQnaBtn.addEventListener('click', () => {
  popupQna.style.display = "block";
  popupBg.style.display = "block"
})

colorFilterBtn.addEventListener("click", () => {
  colorSelectPopup.style.bottom = 0;
  popupBg.style.display = "block"
})

//현재포인트설명
pointBtn.addEventListener('click', () => {
  orderCharge.classList.toggle('view')
})

// for(let i = 0; i < colorBtn.length; i++) {
//     colorBtn[i].addEventListener("click", () => {
//         colorSelectPopup.style.bottom = 0;
//         popupBg.style.display = "block";
//     })
// }



colorBtn.forEach(el => {
  el.addEventListener('click', () => {
      colorSelectPopup.style.bottom = 0;
      popupBg.style.display = "block";
  })
})

//알림톡 전송
informBtn.addEventListener('click', (e) => {
  e.preventDefault();
  informPopup.style.display = "block";
  popupBg.style.display = "block";
})
//오더접수일
orderAccept.addEventListener('click', () => {
  articleSelect.style.bottom = 0;
  popupBg.style.display = "block"
})
//메모입력
memoBtn.addEventListener('click', () => {
  memoPopup.style.display = "block";
  popupBg.style.display = "block";
})

closeBtn.forEach(el => {
  el.addEventListener('click', () => {
      popup.style.bottom = "-100%";
      chargeSelectPopup.style.bottom = "-100%";
      popupCalendar.style.display = "none";
      popupQna.style.display = "none";
      informPopup.style.display = "none";
      popupCalendar.style.display = "none";
      articlePopup.style.bottom = "100%";
      memoPopup.style.display = "none";
      popupCalendar.style.display = "none";
      popupBg.style.display = "none";
  })
})

cancelBtn.forEach(el => {
  el.addEventListener('click', () => {
      informPopup.style.display = "none";
      memoPopup.style.display = "none";
      popupBg.style.display = "none"
  })
})

import { URL } from '../utils/url';

const datesetMove = document.querySelector('.date-set-move');

datesetMove.addEventListener('click', () =>{
  location.href = `${URL}/schedule.html`
})

export { orderDateBtn, chargeSelectBtn, officeQnaBtn, colorFilterBtn, pointBtn, colorBtn, informBtn, orderAccept, memoBtn, closeBtn, cancelBtn, datesetMove }