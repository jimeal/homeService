import { URL } from '../utils/url';
const navList = [
  { name: '홈', img: 'nav-btn1', path: 'index'},
  { name: '일정관리', img: 'nav-btn2', path: 'date_set'},
  { name: '오더관리', img: 'nav-btn-order', path: 'order'},
  { name: '마감관리', img: 'nav-btn3', path: 'soldout'},
  { name: '마이페이지', img: 'nav-btn4', path: 'my'},
];
const ulEl = document.querySelector('.nav-bar--bottom');
const pathSplit = window.location.pathname.split("/").pop(); 
let path = pathSplit.replace(/.html/i, '');

const render = () => {
    const template = navList.map(navItem => {

      if(path === '') {
        path = 'index';
        console.log(path)
      }

      if(path === `${navItem.path}` && path !== 'order') {
        return `
        <li class="${navItem.path}">
          <a href='${URL}/${navItem.path === '' ? '' : `${navItem.path}.html`}' class="active">
              <img src='./assets/${navItem.img}-on.png' alt='${navItem.name}'>
              <span>${navItem.name}</span>
          </a>
        </li>`
      } else if (path === 'order') {
        return `
        <li class="${navItem.path}">
          <a href='${URL}/${navItem.path}.html'>
              <img src='./assets/${navItem.img}.png' alt='${navItem.name}'>
              ${navItem.path === 'order' ? '' : `<span>${navItem.name}</span>`} 
          </a>
        </li>`
      } else {
        return `
        <li class="${navItem.path}">
          <a href='${URL}/${navItem.path}.html'>
              <img src='./assets/${navItem.img}.png' alt='${navItem.name}'>
              ${navItem.path === 'order' ? '' : `<span>${navItem.name}</span>`} 
          </a>
        </li>`
      }

    }).join('');


  ulEl.innerHTML = template;
}

export { navList, render }