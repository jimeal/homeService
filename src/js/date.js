import Litepicker from 'litepicker';

const calendarContainer = document.querySelector('#calendar');
const dateInput = document.querySelector('#dateSelect');

//달력 초기화
const calendar = new Litepicker({ 
  element: calendarContainer,
  inlineMode: true,
  lang: 'ko-KR',
  format: 'YYYY-MM-DD',
  showTooltip: false,
  singleMode: true
});

const datepicker = () => {
  //달력에 전월 후월 날짜 추가로 넣어주기
  calendar.on('render:month', (month, date) => {
    const days = month.querySelector('.container__days');
    const pre = days.querySelectorAll(':not([class])') || [];
    const daysInMonth = days.children.length - pre.length;

    const calendars = calendar.calendars;
    const isFirst = calendars[0].isSame(date, 'day');
    const isLast = calendars[calendars.length - 1].isSame(date, 'day');

    if(isFirst) {
      const before = date.clone();
      pre.forEach((element) => {
        days.removeChild(element);
        before.subtract(1, 'day');
        const day = calendar.renderDay(before);
        day.classList.add('is-pre');
        days.prepend(day);
      });
    }

    if(isLast) {
      const after = date.clone().add(daysInMonth, 'days');
      const maxDays = days.children.length > 35 ? 42 : 35;
      while(days.children.length < maxDays) {
        const day = calendar.renderDay(after);
        day.classList.add('is-post');
        days.appendChild(day);
        after.add(1, 'day');
      }
    }
  });

  //date1은 시작일 date2는 종료일, 단일이면 date1만 유효
  calendar.on('preselect', (date1, date2) => {
  if(dateInput) {
    dateInput.value = `${date1.getFullYear()}년 ${date1.getMonth()+1}월 ${date1.getDate()}일`
    popupBg.style.display = "none";
    popupCalendar.style.display = "none";
  }
  });


  calendar.hide();
  calendar.show();
}

//달력안에 시간 뱃지 표시용
const badgeGenerate = function(){
  const days = document.querySelectorAll('.day-item');
  //첫번째
  let badgeContainer = document.createElement('div');
  badgeContainer.classList.add('badge-container');
  let badge;
  const contentArr = [
    { text: '09:00', color: 'badge--black'},
    { text: '10:00', color: 'badge--red'},
    { text: '11:35', color: 'badge--blue'},
    { text: '13:20', color: 'badge--green'}
  ]

  
  days.forEach(el => {
    badgeContainer = document.createElement('div');
    badgeContainer.classList.add('badge-container');
    el.appendChild(badgeContainer)
    
    badge = document.createElement('span');
    badge.classList.add('badge');
    badgeContainer.appendChild(badge);

    if (el.innerText === '7') {
      contentArr.map(e => {
        badgeCreate();
        badge.innerText = `${e.text}`;
        badge.classList.add(`${e.color}`);
      })
    }else if(el.innerText === '16') {
      badgeCreate();
      badge.innerText = contentArr[0].text;
      badge.classList.add(contentArr[0].color);
    }else if(el.innerText === '27') {
      badgeCreate();
      badge.innerText = contentArr[1].text;
      badge.classList.add(contentArr[1].color);
    }else if (el.innerText === '30') {
      badgeCreate();
      badge.innerText = contentArr[2].text;
      badge.classList.add(contentArr[2].color);
    }else if(el.innerText === '12') {
      badgeCreate();
      badge.innerText = contentArr[3].text;
      badge.classList.add(contentArr[3].color);
    }
  })

  function badgeCreate () {
    badge = document.createElement('span');
    badge.classList.add('badge');
    badgeContainer.appendChild(badge);
  }
}

export { calendar, datepicker, badgeGenerate }
