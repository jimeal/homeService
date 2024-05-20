import "../css/notice_detail.css";

import { historyBack } from './module/common';
import { fetchPost, postDetailTemplate, postId, qnaDetail } from './module/noticeDetailContent';

window.addEventListener("DOMContentLoaded", () => {
  historyBack();

  fetchPost(postId).then((post) => {
    console.log(post)
    console.log(postId)
    qnaDetail.innerHTML = postDetailTemplate(post);
  });
})