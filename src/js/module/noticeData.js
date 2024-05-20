import { DB_URL } from "../utils/url";
const noticeUl = document.querySelector(".notice--list");
const post = {};

const pathSplit = window.location.pathname.split("/").pop(); 
const path = pathSplit.replace(/.html/i, '');
// /post-detail.html?id=${post.id}
const noticeTemplate = post => {
  console.log(path)
  if(path === 'index' || path === ''){
    if(`${post.id}` === '1') {
    return `
      <li class="pick">
        <a href="./notice_detail.html?id=${post.id}">
            <span class="list-title line1">${post.title}</span>
            <span class="description">2032.12.13 (화)</span>
        </a>
      </li>
    `
    }else {
      return `
      <li>
        <a href="./notice_detail.html?id=${post.id}">
            <span class="list-title line1">${post.title}</span>
            <span class="description">2032.12.12 (월)</span>
        </a>
      </li>
    `
    }
  }else {
  return `<li>
    <a href="./notice_detail.html?id=${post.id}">
        <div class="count">${post.id}</div>
        <div class="question complate">
            <h3 class="line1">${post.title}</h3>
            <span class="write-date">2032.12.13 (화)</span>
        </div>
    </a>
  </li>
`
  }
}

async function fetchPost() {
  const response = await fetch(`${DB_URL}/notice`)
  const data = await response.json();
  return data;
}


export { fetchPost, noticeTemplate, noticeUl }