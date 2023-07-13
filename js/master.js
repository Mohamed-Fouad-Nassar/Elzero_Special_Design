// header section scripts
let header = document.getElementsByTagName("header")[0];
// add class scroll to header with scrolling
window.addEventListener("scroll", () => {
  if (window.pageYOffset === 0) header.classList.remove("scroll");
  else header.classList.add("scroll");
});
// add class scroll to header without scrolling ex-reload the page
if (window.pageYOffset === 0) header.classList.remove("scroll");
else header.classList.add("scroll");
////////////////////////////////////////////////////////////////
// nav section scripts
let navShowBtn = document.getElementById("navShowBtn");
let navHideBtn = document.getElementById("navHideBtn");
let nav = document.getElementsByTagName("nav")[0];
let navOverlay = document.querySelector("nav + .nav-overlay");
// show nav bar
navShowBtn.addEventListener("click", (e) => {
  navShowBtn.classList.add("active");
  nav.classList.add("active");
  // e.stopPropagation();
});
// hide nav bar
navHideBtn.addEventListener("click", (e) => {
  nav.classList.remove("active");
  // e.stopPropagation();
});
document.addEventListener("click", (e) => {
  if (
    e.target === navOverlay ||
    e.target === asideShowHideBtn ||
    e.target === asideShowHideBtn.children[0]
  ) {
    nav.classList.remove("active");
  }
});
////////////////////////////////////////////////////////////////
// aside section scripts
// first ==> show and hide aside section
let asideShowHideBtn = document.getElementById("sideShowHideBtn");
let aside = document.getElementsByTagName("aside")[0];
let asideOverlay = document.querySelector("aside + .aside-overlay");
asideShowHideBtn.addEventListener("click", (e) => {
  asideShowHideBtn.classList.toggle("active");
  aside.classList.toggle("active");
  // e.stopPropagation();
});
document.addEventListener("click", (e) => {
  if (e.target === asideOverlay) {
    asideShowHideBtn.classList.remove("active");
    aside.classList.remove("active");
  }
});
////////////////////////////////
// second ==> color options section
let colorsList = document.querySelectorAll("aside .colors-setting ul li");
colorsList.forEach((color) => {
  color.addEventListener("click", (e) => {
    // remove active class from each color option
    colorsList.forEach((ele) => {
      ele.classList.remove("active");
    });
    // add active class to target color option
    e.target.classList.add("active");
    // add color to the local storage
    window.localStorage.setItem("mainColor", e.target.dataset.color);
    // add color to the root element
    document.documentElement.style.setProperty(
      "--mainColor",
      e.target.dataset.color
    );
  });
});
// get main color from local storage or put the default main color
if (window.localStorage.getItem("mainColor")) {
  // console.log(window.localStorage.getItem("mainColor"));
  document.documentElement.style.setProperty(
    "--mainColor",
    window.localStorage.getItem("mainColor")
  );
  colorsList.forEach((e) => {
    if (e.dataset.color === window.localStorage.getItem("mainColor"))
      e.classList.add("active");
  });
} else {
  window.localStorage.setItem("mainColor", "#ff9800");
  document.documentElement.style.setProperty("--mainColor", "#ff9800");
  colorsList.forEach((e) => {
    if (e.dataset.color === "#ff9800") e.classList.add("active");
  });
}
////////////////////////////////
// third ==> theme options section
let themeList = document.querySelectorAll("aside .theme-setting ul li");
themeList.forEach((theme) => {
  theme.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
    } else {
      // remove class active from all list elements
      themeList.forEach((theme) => {
        theme.classList.remove("active");
      });
      // add class active to target elements
      e.target.classList.add("active");
      window.localStorage.setItem("theme", e.target.dataset.theme);
      if (e.target.dataset.theme === "dark") {
        document.body.setAttribute("data-theme", "dark");
      } else {
        document.body.setAttribute("data-theme", "light");
      }
    }
    // change theme based on click
  });
});
// get theme from localStorage or put default theme
if (window.localStorage.getItem("theme")) {
  document.body.setAttribute(
    "data-theme",
    window.localStorage.getItem("theme")
  );
  themeList.forEach((e) => {
    if (e.dataset.theme === window.localStorage.getItem("theme"))
      e.classList.add("active");
  });
} else {
  document.body.setAttribute("data-theme", "light");
  themeList.forEach((e) => {
    if (e.dataset.theme === "light") e.classList.add("active");
  });
}
////////////////////////////////
// fourth ==> random backgrounds options section
let randomBackgroundList = document.querySelectorAll(
  "aside .backgrounds-setting ul li"
);
let landingSec = document.getElementById("landing");
let bgInterval;
// function to change the background image
let randomBackgrounds = () => {
  landingSec.style.backgroundImage = `url("./data/images/01.jpg")`;
  let randomImages = [
    "./data/images/01.jpg",
    "./data/images/02.jpg",
    "./data/images/03.jpg",
    "./data/images/04.jpg",
    "./data/images/05.jpg",
  ];
  // if (true) {
  bgInterval = setInterval(() => {
    let i = Math.floor(Math.random() * randomImages.length);
    landingSec.style.backgroundImage = `url(${randomImages[i]})`;
  }, 10000);
  // }
};
randomBackgroundList.forEach((option) => {
  option.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
    } else {
      // remove class active from all list elements
      randomBackgroundList.forEach((option) => {
        option.classList.remove("active");
      });
      // add class active to target elements
      e.target.classList.add("active");
      window.localStorage.setItem("randomBG", e.target.dataset.random);
      if (e.target.dataset.random === "true") {
        clearInterval(bgInterval);
        randomBackgrounds();
      } else {
        clearInterval(bgInterval);
        window.localStorage.setItem(
          "randomURL",
          landingSec.style.backgroundImage
        );
      }
    }
  });
});
// get theme from localStorage or put default random background options
if (window.localStorage.getItem("randomBG") === "true") {
  clearInterval(bgInterval);
  // landingSec.style.backgroundImage = `url("./data/images/01.jpg")`;
  randomBackgrounds();
  randomBackgroundList.forEach((e) => {
    if (e.dataset.random === "true") e.classList.add("active");
  });
} else if (window.localStorage.getItem("randomBG") === "false") {
  clearInterval(bgInterval);
  // if (window.localStorage.getItem("randomURL")) {
  landingSec.style.backgroundImage = window.localStorage.getItem("randomURL");
  // } else {
  //   landingSec.style.backgroundImage = `url("./data/images/01.jpg")`;
  // }
  randomBackgroundList.forEach((e) => {
    if (e.dataset.random === "false") e.classList.add("active");
  });
} else {
  // landingSec.style.backgroundImage = `url("./data/images/01.jpg")`;
  window.localStorage.setItem("randomBG", "true");
  randomBackgroundList.forEach((e) => {
    if (e.dataset.random === "true") e.classList.add("active");
  });
  clearInterval(bgInterval);
  randomBackgrounds();
}
////////////////////////////////
// fifth ==> bullets options section
let bulletList = document.querySelectorAll("aside .bullets-setting ul li");
let bulletsDiv = document.getElementById("bullets");
bulletList.forEach((option) => {
  option.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
    } else {
      // remove class active from all list elements
      bulletList.forEach((option) => {
        option.classList.remove("active");
      });
      // add class active to target elements
      e.target.classList.add("active");
      window.localStorage.setItem("bullets", e.target.dataset.bullets);
      if (e.target.dataset.bullets === "true") {
        bulletsDiv.classList.add("active");
      } else {
        bulletsDiv.classList.remove("active");
      }
    }
    // change theme based on click
  });
});
// get theme from localStorage or put default bullets option
if (window.localStorage.getItem("bullets") === "true") {
  bulletsDiv.classList.add("active");
  bulletList.forEach((e) => {
    if (e.dataset.bullets === "true") e.classList.add("active");
  });
} else if (window.localStorage.getItem("bullets") === "false") {
  bulletsDiv.classList.remove("active");
  bulletList.forEach((e) => {
    if (e.dataset.bullets === "false") e.classList.add("active");
  });
} else {
  window.localStorage.setItem("bullets", "true");
  bulletsDiv.classList.add("active");
  bulletList.forEach((e) => {
    if (e.dataset.bullets === "true") e.classList.add("active");
  });
}
////////////////////////////////
// sixth ==> reset options section
let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
  window.localStorage.clear();
  window.location.reload();
});
////////////////////////////////////////////////////////////////
// skills section scripts
let skillsSec = document.getElementById("skills");
let progress = document.querySelectorAll(".skills .box .progress span");
window.addEventListener("scroll", () => {
  if (this.pageYOffset > skillsSec.offsetTop - skillsSec.offsetHeight) {
    progress.forEach((e) => {
      e.style.width = `${e.dataset.progress}`;
    });
  }
});
////////////////////////////////////////////////////////////////
// gallery section scripts
let galleryImgs = document.querySelectorAll(".gallery .sec-body img");
galleryImgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    // create pop-up
    let popUp = document.createElement("div");
    popUp.classList.add("pop-up");

    // create pop-up overlay
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // create image card
    let imgCard = document.createElement("div");
    imgCard.classList.add("image-card");

    // create title of image if it found
    let imgTitle = document.createElement("span");
    if (e.target.alt !== null || e.target.alt !== "") {
      imgTitle.innerText = e.target.alt;
    }
    // append title to image card
    imgCard.append(imgTitle);

    // create cancel button
    let cancelBtn = document.createElement("div");
    cancelBtn.classList.add("cancel");
    cancelBtn.innerHTML = `<i class="f-icon fa-solid fa-xmark"></i>`;
    // append cancel button to image card
    imgCard.prepend(cancelBtn);

    // create image
    let popUpImg = document.createElement("img");
    popUpImg.setAttribute("src", e.target.src);
    if (e.target.alt !== null || e.target.alt !== "") {
      popUpImg.setAttribute("alt", e.target.alt);
    }
    // append image to image card
    imgCard.append(popUpImg);

    // append elements to pop-up
    popUp.prepend(overlay);
    popUp.append(imgCard);

    // append pop-up to body
    document.body.append(popUp);
    // add active class to pop-up
    setTimeout(() => {
      popUp.classList.add("active");
    }, 1);
    // e.stopPropagation();

    // close pop-up
    document.addEventListener("click", (ele) => {
      if (ele.target === overlay) {
        popUp.classList.remove("active");
      }
    });
    cancelBtn.addEventListener("click", () => {
      popUp.classList.remove("active");
    });
  });
});
////////////////////////////////////////////////////////////////
// form validation scripts
let mailValid = function isEmail(value) {
  let regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (value.match(regEx)) return true;
  else return false;
};
let nameValid = function isName(value) {
  let regEx = /^[a-zA-Z ]{2,30}$/;
  if (value.match(regEx)) return true;
  else return false;
};
let phoneValid = function isPhoneNumber(value) {
  let regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[ 0-9]{3}[-\s\.]?[ 0-9]{4,6}$/im;
  if (value.match(regEx)) return true;
  else return false;
};
let contactSubmit = document.getElementById("submitBtn");
let contactForm = document.querySelector(".contact .sec-body form");

let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");

contactForm.addEventListener("submit", (e) => {
  if (
    phoneValid(phone.value) &&
    nameValid(name.value) &&
    mailValid(email.value)
  ) {
  } else {
    e.preventDefault();
    if (phoneValid(phone.value) === false) {
      phone.closest(".field").classList.remove("success");
      phone.closest(".field").classList.add("error");
    } else {
      phone.closest(".field").classList.remove("error");
      phone.closest(".field").classList.add("success");
    }
    if (nameValid(name.value) === false) {
      name.closest(".field").classList.remove("success");
      name.closest(".field").classList.add("error");
    } else {
      name.closest(".field").classList.remove("error");
      name.closest(".field").classList.add("success");
    }
    if (mailValid(email.value) === false) {
      email.closest(".field").classList.remove("success");
      email.closest(".field").classList.add("error");
    } else {
      email.closest(".field").classList.remove("error");
      email.closest(".field").classList.add("success");
    }
  }
});

////////////////////////////////////////////////////////////////
// go-up button scripts
let goUpBtn = document.getElementsByClassName("go-up")[0];
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 700) goUpBtn.style.display = "block";
  else goUpBtn.style.display = "none";
});
goUpBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
