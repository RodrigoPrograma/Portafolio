document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 550) {
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

