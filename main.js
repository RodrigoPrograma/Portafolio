document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 430) {
      document.getElementById("navbar").classList.add("nav-fixed");
      document.getElementById("navbar").classList.remove("navbar");
      navbar_height = document.querySelector(".navbar");
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar").classList.remove("nav-fixed");
      document.getElementById("navbar").classList.add("navbar");
      document.body.style.paddingTop = "0";
    }
  });
});
document.getElementById("btn-nav").addEventListener("click", changeIcon);

var icon = document.getElementById("bars");

function changeIcon() {
icon.classList.toggle("la-bars")
icon.classList.toggle("la-times")  
};

const skillSpan = document.getElementById("span");
const skillBtn = document.getElementById("skillButton");

skillBtn.addEventListener("click", spanShow,);

function spanShow() {

  skillSpan.classList.toggle("tailwindSpan");
  skillSpan.classList.toggle("tailwindSpan:active");
}


function mostrar () { 
const span = document.getElementById("viteSpan"); 
span.classList.toggle("viteSpan");
span.classList.toggle("viteSpan:active");
}
