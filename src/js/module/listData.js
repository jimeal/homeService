import { DB_URL } from "../utils/url";
const listUl = document.querySelector(".main-ul-list");
const post = {};

const listTemplate = (post) => {
  return `
  <article class="list-card">
    <a href="./list_detail.html?id=${post.id}" class="flexbox">
        <figure class='list-card--img'>
            <img src='${post.image[0]}' alt="${post.title}">
            <figcaption>
              <span>${post.state}</span>
            </figcaption>
        </figure>
        <div class="list-card-content">
            <h3 class="line2">${post.title}</h3>
            <span class="con-tel">${post.phone}</span>
            <span class="con-state">1/2.5/3.5/5톤 사다리</span>
            <span class="con-desc line2">${post.body}</span>
        </div>
        <input type="checkbox" id="pick01" name="pick" ${post.checked === 'on' ? 'checked': ''}>
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


export { fetchPost, listTemplate, listUl }