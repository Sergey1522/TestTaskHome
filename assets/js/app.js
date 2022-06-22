const tellCompany = document.querySelector("#tellcompany");
const popUp = document.querySelector(".popup");
const closePopup = document.querySelector(".close_popup");
let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".navbar");
const social = document.querySelector(".social_item");
const info = document.querySelector(".info_company");
const price = document.querySelector(".download_price");
const descrCompany = document.querySelector(".descr_company");
console.log(tellCompany);

tellCompany.addEventListener("click", () => {
  popUp.classList.add("show");

  console.log("click");
});
closePopup.addEventListener("click", (e) => {
  if (e.target) {
    popUp.classList.remove("show");
  }
});

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  social.classList.toggle("show_social");
  info.classList.toggle("show_info");
  price.classList.toggle("show_price");
  descrCompany.classList.toggle("hidden_descr");
});
