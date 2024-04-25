
const footerEl = document.querySelector(".footer");


const render = () => {

  const template = () => {
    return `
    <div class="inner">
      <h1 class="footer-logo"></h1>
      <article class="footer-info">
          <dl class="flexbox">
              <dt>고객센터</dt>
              <dd>1588-6571</dd>
          </dl>
          <dl class="flexbox">
              <dt>메일</dt>
              <dd>wedongne@gmail.com</dd>
          </dl>
          <dl class="flexbox">
              <dt>홈페이지</dt>
              <dd>https://www.wedongne.com</dd>
          </dl>
      </article>

      <article class="entre-info">
          <h3>(주)우리동네 홈서비스 <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=3348103175" target="_blank">사업자정보확인</a></h3>
          <dl class="flexbox">
              <dt>대표이사</dt>
              <dd>심재광</dd>
          </dl>
          <dl class="flexbox">
              <dt>사업자등록번호</dt>
              <dd>334-81-03175</dd>
          </dl>
          <dl class="flexbox">
              <dt>통신판매업 신고번호</dt>
              <dd>제2023-진접오남-0814호</dd>
          </dl>

          <address class="footer-addr">경기도 남양주시 오남읍 진건오남로 912번길 14 2층</address>
      </article>

      <div class="footer--line-logo flexbox">
          <h4>e-성경 익스프레스는<br>우리동네 홈서비스의 자사입니다.</h4>
          <img src="./assets/footer-img.png" alt="">
      </div>

      <article class="entre-info2">
          <h3>e-성경 익스프레스 <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=4860901074" target="_blank">사업자정보확인</a></h3>
          <dl class="flexbox">
              <dt>사업자등록번호</dt>
              <dd>486-09-01074</dd>
          </dl>
          <dl class="flexbox">
              <dt>화물자동차운송주선허가증</dt>
              <dd>제2018-05호</dd>
          </dl>
      </article>

      <div class="footer-notice">(주)우리동네 홈서비스는 온라인 플랫폼 중개자로서 본사가 취급하는 각 지역의 서비스를 파트너사에 제공하는 회사임으로, 거래당사자가 아니며 입점 파트너사가 제공하는 서비스에대한 이행, 계약사항 및 분쟁에 책임지지 않습니다.</div>

      <ul class="footer-shortcut flexbox">
          <li><a href="">이용약관</a></li>
          <li><a href="">개인정보처리방침</a></li>
      </ul>

      <span class="copyright">COPYRIGHT © 우리동네 홈서비스. ALL RIGHTS RESERVED</span>
    </div>
    `.join('')
  }

  footerEl.innerHTML = template;
}

export { render }