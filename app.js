// -------------------------Scroll Fade-------------------------
const checkpoint = 200;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".header-content").style.opacity = opacity * 1;
});

// ---------------------------------------------------------MENU----------------------------------------------
const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item")).forEach(
  (item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    };
  }
);
// --------------------------------------------FROM LEFT ANIMATION-----------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// ------------------------------------NAVBAR Scroll-----------------------------
const checkpoint1 = 1000;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= checkpoint1) {
    opacity = currentScroll / checkpoint1;
  } else {
    opacity = 1;
  }
  document.querySelector(".navbar").style.opacity = opacity * 1;
});
// ----------------------------Theme Changer-----------------------------------
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("light-mode");
});
