// on mousemove
const cursor = document.getElementById("cursor");
let cursorInit = false;
const links = document.querySelectorAll("a, h1, label");
const letters = document.querySelectorAll("h1 > span");

links.forEach((selfLink) => {
  selfLink.addEventListener("mouseover", function () {
    cursor.classList.add("cursor-link");
  });

  selfLink.addEventListener("touchend", function () {
    cursor.classList.remove("cursor-link");
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

document.addEventListener("touchmove", function (e) {
  cursor.style.left = e.touches[0].clientX + "px";
  cursor.style.top = e.touches[0].clientY + "px";

  if (!cursorInit) {
    cursor.style.opacity = 1;
    cursorInit = true;
  }
});

const deleteMouse = () => {
  cursor.style.opacity = 0;
  cursorInit = false;
}

// on mouseleave
document.addEventListener("mouseout", deleteMouse, false);

document.addEventListener("touchend", deleteMouse, false);

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

const toggleSwitch = document.getElementById("toggle");

//determines if the user has a set theme
function detectColorScheme() {
  let theme = "light"; //default to light

  //local storage is used to override OS theme settings
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") == "dark") {
      theme = "dark";
    }
  } else if (!window.matchMedia) {
    //matchMedia method not supported
    return false;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //OS theme setting detected as dark
    theme = "dark";
  }

  //dark theme preferred, set document with a `data-theme` attribute
  if (theme == "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}
detectColorScheme();

//function that changes the theme, and sets a localStorage variable to track the theme between page loads
function switchTheme(e) {
    if (e.target.checked) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
    } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.checked = false;
    }    
}

//listener for changing themes
toggleSwitch.addEventListener("input", switchTheme, false);

//pre-check the dark-theme checkbox if dark-theme is set
if (document.documentElement.getAttribute("data-theme") == "dark"){
    toggleSwitch.checked = true;
}
