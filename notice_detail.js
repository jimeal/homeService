/*!
 * 
 *         Build Date: 2024. 8. 9. 오전 3:47:13
 *         Commit Version: acae4fc
 * 
 *         Author: Bae Ji-min
 * 
 *       
 */!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=32)}({2:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));const o="https://jimeal.github.io/homeService",r="https://home-service-project.glitch.me"},24:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);n(24);var o=n(5),r=n(2);const c=new URLSearchParams(window.location.search).get("id"),i=document.querySelector(".qna-detail .inner");window.addEventListener("DOMContentLoaded",()=>{Object(o.c)(),async function(e){const t=await fetch(`${r.a}/notice/${e}`);return await t.json()}(c).then(e=>{console.log(e),console.log(c),i.innerHTML=function(e){return`\n  <section class="detail-top notice-top">\n    <div class="detail-top--title notice-top--title">\n        <h2>${e.title}</h2>\n        <span class="write-date">2023.08.24  14:34</span>\n    </div>\n  </section>\n\n  <section class="detail-content notice-content">\n    <p>${e.body}</p>\n  </section>\n  `}(e)})})},5:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return r}));const o=document.querySelector(".btn--return"),r=document.querySelectorAll(".tab-container__item"),c=document.querySelectorAll(".content-container__content"),i=()=>{o.addEventListener("click",e=>{e.preventDefault(),window.history.back()})},a=e=>{const t=e.currentTarget,n=t.dataset.tab;r.forEach(e=>{e.classList.remove("active")}),c.forEach(e=>{e.classList.remove("target")}),document.querySelector("#"+n).classList.add("target"),t.classList.add("active")},s=document.querySelector(".copy-text"),l=document.querySelector(".copy"),u=()=>{l.addEventListener("click",async()=>{try{await window.navigator.clipboard.writeText(s.innerText).then(()=>{alert(" 복사완료!")})}catch(e){console.log(e)}})},d=async()=>{const e=document.querySelector(".fold-btn"),t=document.querySelector(".fold-btn2"),n=document.querySelector(".product--list"),o=document.querySelector(".info-p");await e.addEventListener("click",async t=>{t.preventDefault(),n.classList.toggle("fold"),n.classList.contains("fold")?e.innerText="접기":e.innerText="펼쳐보기"});const r=e=>{t.innerText=e};(async()=>{const e=getComputedStyle(o).height,n=Number(e.replace("px",""));n<=54?(r(""),o.classList.remove("line3")):n>54&&(r("펼쳐보기"),o.classList.add("line3"),await t.addEventListener("click",e=>{e.preventDefault(),console.log(e.target),o.classList.toggle("fold"),o.classList.contains("fold")?(o.classList.remove("line3"),r("접기")):(o.classList.add("line3"),r("펼쳐보기"))}))})()}}});