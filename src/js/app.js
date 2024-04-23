import axios from "axios";
import form from "./form";
import result from "./result";
import "../css/app.css";
import { setCookie, getCookie, on_close_modal, cookieDelete } from "./cookie";

const closeBtn = document.querySelector(".close");
const $ipt = document.getElementById('hide-24');

document.addEventListener("DOMContentLoaded", async () => {

  getCookie();
  closeBtn.addEventListener("click",on_close_modal);
  $ipt.addEventListener("click", cookieDelete);

  function cookieDelete() {
    setCookie(modalName, "done", 1);
}

})
