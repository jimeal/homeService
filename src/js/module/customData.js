import { DB_URL } from "../utils/url";
const orderUl = document.querySelector(".order--list");
const tab1 = document.querySelector("#tab1")
const post = {};

const postTemplate = (post) => {
  return `
  <article class="list-card">
    <a href="./list_detail.html" class="flexbox">
        <div class="list-card--img ladder">
            <img src="${post.image}" alt="우리동네 사다리">
        </div>
        <div class="list-card-content">
            <h3 class="line2">${post.title}</h3>
            <span class="con-tel">${post.phone}</span>
            <span class="con-state">1/2.5/3.5/5톤 사다리</span>
            <span class="con-desc line2">${post.body}</span>
        </div>
        <input type="checkbox" id="pick01" name="pick" checked>
        <label for="pick01"></label>
    </a>
</article>
`
}

async function fetchPost() {
  const response = await fetch(`${DB_URL}/list`)
  const data = await response.json();
  return data;
}


export { fetchPost, postTemplate, listUl }