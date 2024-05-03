const fileInput = document.querySelector("#license");
const entFileInput = document.querySelector("#entLicense");
const uploadName1 = document.querySelector(".upload-name1");
const uploadName2 = document.querySelector(".upload-name2");

const yearSelect = () => {

  // 서비스 시작년도
  const selectEl = document.querySelector("#startYear");
  const currentYear = (new Date()).getFullYear();

  for(let i = 2017; i <= currentYear; i++) {
    const option = document.createElement("OPTION");
    optionAppend(i + '년', option);
    selectEl.appendChild(option);
  }

  // 차량대수
  const carNum = document.querySelector("#carNum");
  
  for(let i = 1; i <= 5; i++) {
    const option = document.createElement("OPTION");
    optionAppend(i + '대', option);
    const length = carNum.length;
    if(length == 5) {
      option.innerHTML = `${i}대 이상`;
    }
    carNum.appendChild(option);
  }

  // 직원수
  const memberNum = document.querySelector("#memberNum");
  let optionLength = 30;

  for(let i = 10; i <= optionLength; i += 10) {
    const option = document.createElement("OPTION"); 
    optionAppend(i + '명', option);
    const length = memberNum.length;
    console.log(length)
    if(length == 1) {
      option.innerHTML = `${i}명 이하`;
    }else if(length == 3) {
      option.innerHTML = `${i}명 이상`;
    }
    memberNum.appendChild(option);
  }

  function optionAppend(idx, option) {
    option.innerHTML = idx;
    option.value = idx;
  }
}

// 파일업로드
const fileChange = () => {
  const fileName = fileInput.value;
  uploadName1.value = fileName;
}
const fileChange2 = () => {
  const fileName = entFileInput.value;
  uploadName2.value = fileName;
}


const submitBtn = document.querySelector(".regist-submit");
const submitBtnClick = () => {
  submitBtn.addEventListener("click", () => {
    document.querySelector(".regi-popup").style.display = "block";
    document.querySelector(".popup-bg").style.display = "block";
  })
}

const popupFooterBtn = document.querySelector(".confirm");

const footerBtnSubmit = () => {
  location.href = 'index.html';
}

export { yearSelect, fileChange, fileChange2, submitBtnClick, footerBtnSubmit, popupFooterBtn }