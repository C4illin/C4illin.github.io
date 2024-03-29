const cursor = document.getElementById("cursor");
let cursorInit = false;
const links = document.querySelectorAll("a, h1, label");
const letters = document.querySelectorAll("h1 > span");

links.forEach((selfLink) => {
  selfLink.addEventListener("mouseover", () =>
    cursor.classList.add("cursor-link")
  );
  selfLink.addEventListener("touchmove", () =>
    cursor.classList.add("cursor-link")
  );
  selfLink.addEventListener("touchend", () =>
    cursor.classList.remove("cursor-link")
  );
  selfLink.addEventListener("mouseout", () =>
    cursor.classList.remove("cursor-link")
  );
});

document.addEventListener("mousemove", (e) => moveMouse(e));
document.addEventListener("click", (e) => moveMouse(e));

document.addEventListener("touchmove", (e) => {
  cursor.style.left = e.touches[0].clientX + "px";
  cursor.style.top = e.touches[0].clientY + "px";
  if (!cursorInit) {
    cursor.style.opacity = 1;
    cursorInit = true;
  }
});

const moveMouse = (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  if (!cursorInit) {
    cursor.style.opacity = 1;
    cursorInit = true;
  }
};

const deleteMouse = () => {
  cursor.style.opacity = 0;
  cursorInit = false;
};

document.addEventListener("mouseout", deleteMouse, false);
document.addEventListener("touchend", deleteMouse, false);
document.addEventListener("touchcancel", deleteMouse, false);
document.addEventListener("touchleave", deleteMouse, false);

const explodeName = () => {
  letters.forEach((letter) => {
    letter.style.transform = `translate(${(Math.random() - 0.5) * 0.2}em, ${
      (Math.random() - 0.5) * 0.5
    }em) rotate(${(Math.random() - 0.5) * 60}deg)`;
  });
};

const implodeName = () => {
  letters.forEach((letter) => {
    letter.style.transform = `translate(0px, 0px)`;
  });
};

const toggleSwitch = document.getElementById("toggle-check");

function detectColorScheme() {
  let theme = "light";
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") == "dark") {
      theme = "dark";
    }
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    theme = "dark";
  }

  if (theme == "dark") {
    document.documentElement.classList.add("dark");
    toggleSwitch.checked = true;
  } else {
    document.documentElement.classList.add("light");
    toggleSwitch.checked = false;
  }
}

detectColorScheme();

function switchTheme(e) {
  if (toggleSwitch.checked) {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("input", switchTheme, false);

if (document.documentElement.getAttribute("data-theme") == "dark") {
  toggleSwitch.checked = true;
}
