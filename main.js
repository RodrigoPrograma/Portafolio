document.addEventListener("DOMContentLoaded", function () {
  var icon = document.getElementById("bars");
  const skillSpan = document.getElementById("span");
  const skillBtn = document.getElementById("skillButton");
  function changeIcon(element,c1,c2) {
    element.classList.toggle(c1)
    element.classList.toggle(c2)
  };
  skillBtn.addEventListener("click", spanShow,);
  document.getElementById("btn-nav").addEventListener("click", () => changeIcon(icon,'la-bars','la-times'));
  window.addEventListener("scroll", function () {
    if (window.scrollY > 430) document.querySelector(".navbar-brand").innerHTML="RA"
    else document.querySelector(".navbar-brand").innerHTML="Rodrigo Alonzo"
  });
});