import { DB_URL, URL } from "../utils/url";
const postId = new URLSearchParams(window.location.search).get('id');
const detailTop = document.querySelector(".list-swiper");
const contWrap = document.querySelector(".cont-wrap");

async function fetchPost(postId) {
  const response = await fetch(`${DB_URL}/list/${postId}`)
  const data = await response.json();
  return data;
}

const postDetailTemplate = post => {
    return `<section class="detail-title">
        <div class="inner">
            <div class="title-line flexbox">
                <h2 class="title">${post.title}</h2>
                <button>
                    <img src="./assets/location.png" alt="장소지도버튼">
                </button>
            </div>
            <span class="discription">${post.discription}</span>

            <div class="detail-tel flexbox">
                <span>${post.phone}</span>
                <a href="tel:${post.phone}" class="btn btn--primary">전화문의</a>
            </div>

            <dl class="flexbox">
                <dt>홈페이지</dt>
                <dd>
                    <a href="${post.homepage}" target="_blank">${post.homepage}</a>
                </dd>
            </dl>
            <dl class="flexbox">
                <dt>쇼핑몰</dt>
                <dd><a href="${post.shop}" target="_blank">${post.shop}</dd>
            </dl>
        </div>
    </section>

    <section class="product">
        <div class="inner">
            <div class="product--title flexbox">
                <h2>업체상품</h2>
                <a href="">이미지로 보기</a>
            </div>
            <ul class="product--list">
                <li class="flexbox">
                    <span class="prod-name">1톤 사다리차</span>
                    <span class="prod-sum">변동</span>
                </li>
                <li class="flexbox">
                    <span class="prod-name">2.5톤 사다리차</span>
                    <span class="prod-sum">변동</span>
                </li>
                <li class="flexbox">
                    <span class="prod-name">3.5톤 사다리차</span>
                    <span class="prod-sum">변동</span>
                </li>
                <li class="flexbox">
                    <span class="prod-name">5톤 사다리차</span>
                    <span class="prod-sum">변동</span>
                </li>
                <li class="flexbox">
                    <span class="prod-name">1톤 사다리차</span>
                    <span class="prod-sum">600,000</span>
                </li>
                <li class="flexbox">
                    <span class="prod-name">1톤 사다리차</span>
                    <span class="prod-sum">600,000</span>
                </li>
                <li class="flexbox">
                    <span class="prod-name">1톤 사다리차</span>
                    <span class="prod-sum">600,000</span>
                </li>
                <li class="flexbox">
                    <span class="prod-name">1톤 사다리차</span>
                    <span class="prod-sum">600,000</span>
                </li>
            </ul>
            <a href="" class="fold-btn">펼쳐보기</a>
        </div>
    </section>
    <section class="info">
        <div class="inner">
            <h2>업체정보</h2>
            <small>업체소개</small>
            <div class="info-p">
                <p>
                    ${post.body}
                </p>
            </div>
            <a href="" class="fold-btn2">펼쳐보기</a>
        </div>
    </section>
`
}


  export { fetchPost, postDetailTemplate, postId, detailTop, contWrap }  