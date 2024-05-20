const modalName = 'popup';
const mainPopup = document.querySelector(".main-popup");
const mainPopupBackground = document.querySelector(".main-popup-bg");

export function setCookie(name, value, expiredays) {
    let todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);

    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
export  function getCookie() {
    const cookieData = document.cookie;

    cookieData.indexOf(`${modalName}=done`) < 0
    ? mainPopup.style.display = "block" : mainPopup.style.display = "none";
}   

export function on_close_modal() {
    mainPopup.style.display = "none";
    mainPopupBackground.style.display = "none";
}

export  function cookieDelete() {
    setCookie(modalName, "done", 1);
    mainPopup.style.display = "none";
    mainPopupBackground.style.display = "none";
}