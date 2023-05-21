// on mousemove
let cursor = document.getElementById("cursor");
let cursorInit = false;
let links = document.querySelectorAll("a, h1");
let letters = document.querySelectorAll("h1 > span");

links.forEach((selfLink) => {
  selfLink.addEventListener("mouseover", function () {
    cursor.classList.add("cursor-link");
  });
  selfLink.addEventListener("mouseout", function () {
    cursor.classList.remove("cursor-link");
  });
});

document.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  if (!cursorInit) {
    cursor.style.opacity = 1;
    cursorInit = true;
  }
});

// on mouseleave
document.addEventListener("mouseout", function (e) {
  cursor.style.opacity = 0;
  cursorInit = false;
});

let explodeName = () => {

  letters.forEach((letter) => {
    letter.style.transform = `translate(${(Math.random() - 0.5) * 0.2}em, ${(Math.random() - 0.5) * 0.5}em) rotate(${(Math.random() - 0.5) * 60}deg)`;

  });
};

let implodeName = () => {
  letters.forEach((letter) => {
    letter.style.transform = `translate(0px, 0px)`;
  });
}
