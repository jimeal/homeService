import { DB_URL } from "../utils/url";
const post = {};
const postId = new URLSearchParams(window.location.search).get('id');
const qnaDetail = document.querySelector(".qna-detail .inner");

async function fetchPost(postId) {
  const response = await fetch(`${DB_URL}/notice/${postId}`)
  const data = await response.json();
  return data;
}

function postDetailTemplate(post) { 
  return `
  <section class="detail-top notice-top">
    <div class="detail-top--title notice-top--title">
        <h2>${post.title}</h2>
        <span class="write-date">2023.08.24  14:34</span>
    </div>
  </section>

  <section class="detail-content notice-content">
    <p>${post.body}</p>
  </section>
  `}


  export { fetchPost, postDetailTemplate, postId, qnaDetail }