/*!
 * 
 *         Build Date: 2024. 5. 11. 오후 12:38:12
 *         Commit Version: 24d45d6
 * 
 *         Author: Bae Ji-min
 * 
 *       
 */!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}({24:function(e,t,n){"use strict";n.r(t);n(25);var r=n(5);window.addEventListener("DOMContentLoaded",()=>{Object(r.c)()})},25:function(e,t,n){},5:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return v})),n.d(t,"e",(function(){return o}));const r=document.querySelector(".btn--return"),o=document.querySelectorAll(".tab-container__item"),c=document.querySelectorAll(".content-container__content"),i=()=>{r.addEventListener("click",e=>{e.preventDefault(),window.history.back()})},u=e=>{const t=e.currentTarget,n=t.dataset.tab;o.forEach(e=>{e.classList.remove("active")}),c.forEach(e=>{e.classList.remove("target")}),document.querySelector("#"+n).classList.add("target"),t.classList.add("active")},l=document.querySelector(".copy-text"),a=document.querySelector(".copy"),d=()=>{a.addEventListener("click",async()=>{try{await window.navigator.clipboard.writeText(l.innerText).then(()=>{alert(" 복사완료!")})}catch(e){console.log(e)}})},s=document.querySelector(".product--list"),f=document.querySelector(".info-p"),y=document.querySelector(".fold-btn"),p=document.querySelector(".fold-btn2"),v=()=>{y.addEventListener("click",e=>{e.preventDefault(),s.classList.toggle("fold"),console.log(e.target),s.classList.contains("fold")?y.innerText="접기":y.innerText="펼쳐보기"}),p.addEventListener("click",e=>{e.preventDefault(),f.classList.remove("line3"),f.classList.toggle("fold"),f.classList.contains("fold")?p.innerText="접기":p.innerText="펼쳐보기"})}}});