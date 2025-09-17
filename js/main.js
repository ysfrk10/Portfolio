let show = document.querySelector(".show");
let list = document.getElementById("nav");
let header = document.getElementById("header");

show.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 767px)").matches) {
    if (list.style.display === `flex`) {
      list.style.display = `none`;
      show.style.right = ` 20px`;
    } else {
      list.style.display = `flex`;
      show.style.right = ` 45%`;
    }
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.borderBottom = `1px solid var(--main-color)`;
    header.style.boxShadow = `0 -1px 25px -2px var(--main-color)`;
    header.style.transitionDuration = `0.3s`;
  } else {
    header.style.borderBottom = `none`;
    header.style.boxShadow = `0 0px 0px 0px black`;
    header.style.transitionDuration = `0.3s`;
  }
});
