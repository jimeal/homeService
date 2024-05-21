import { DB_URL } from "../utils/url";
const orderUl = document.querySelector(".order--list");
const tabs = document.querySelectorAll(".main-tab .tabs")
const post = {};



const postTemplate = (post) => {
  return `
  <li data-est="${post.estimate}">
      <a href="/">
          <div class="list-title line1 flexbox">
              <span>${post.name}</span>
              <span>${post.phone}</span>
          </div>
          <div class="list-btm flexbox">
              <span class="description">2032.12.13 (화) 17:30:21</span>
              <span class="est-complet">${post.estimate}</span>
          </div>
      </a>
  </li>
`
}

async function fetchPost() {
  const response = await fetch(`${DB_URL}/custom`)
  const data = await response.json();
  return data;
}


export { fetchPost, postTemplate, orderUl, tabs }