// active scroll class on header
let header = document.getElementsByTagName("header")[0];
window.addEventListener("scroll", () => {
  if (window.pageYOffset === 0) {
    header.classList.remove("scroll");
  } else {
    header.classList.add("scroll");
  }
});

// aside show and hide
let asideShowBtn = document.getElementsByClassName("showBtn")[0];
let aside = document.getElementsByTagName("aside")[0];
asideShowBtn.addEventListener("click", (e) => {
  asideShowBtn.classList.toggle("active");
  aside.classList.toggle("active");
  e.stopPropagation();
});
// document.addEventListener("click", (e) => {
//   if (e.target !== aside) {
//     if (aside.classList.contains("active")) {
//       asideShowBtn.classList.toggle("active");
//       aside.classList.toggle("active");
//     }
//   }
// });

// color options
let colorsList = document.querySelectorAll("aside .colors-setting ul li");
colorsList.forEach((e) => {
  e.addEventListener("click", () => {
    colorsList.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.classList.add("active");
    window.localStorage.setItem("mainColor", e.dataset.color);
    document.documentElement.style.setProperty("--mainColor", e.dataset.color);
  });
  if (window.localStorage.getItem("mainColor") === e.dataset.color) {
    colorsList.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.classList.add("active");
  }
});
// set default mainColor or mainColor stored in localStorage
if (window.localStorage.getItem("mainColor") === null) {
  colorsList[0].classList.add("active");
  window.localStorage.setItem("mainColor", "#ff9800");
}
document.documentElement.style.setProperty(
  "--mainColor",
  window.localStorage.getItem("mainColor")
);

// theme options
let themeList = document.querySelectorAll("aside .theme-setting ul li");
let body = document.body;
themeList.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("active")) {
    } else {
      themeList.forEach((ele) => {
        ele.classList.remove("active");
      });
      e.classList.add("active");
      body.setAttribute("data-theme", e.dataset.theme);
      window.localStorage.setItem("mainTheme", e.dataset.theme);
    }
  });
});
// set default theme or theme stored in localStorage
if (window.localStorage.getItem("mainTheme") === null) {
  body.setAttribute("data-theme", "light");
  themeList[0].classList.add("active");
  window.localStorage.setItem("mainTheme", "light");
}
body.setAttribute("data-theme", window.localStorage.getItem("mainTheme"));
themeList.forEach((e) => {
  if (e.dataset.theme === window.localStorage.getItem("mainTheme"))
    e.classList.add("active");
});

///////////////////////////////////////////////

// random background images options
let randomBackgroundList = document.querySelectorAll(
  "aside .backgrounds-setting ul li"
);
let landingPage = document.getElementById("landing");
let bgInterval;
// function to change the background image
let randomBGImage = () => {
  let landingBackgroundURLs = [
    "../data/images/01.jpg",
    "../data/images/02.jpg",
    "../data/images/03.jpg",
    "../data/images/04.jpg",
    "../data/images/05.jpg",
  ];
  // change landing page background
  bgInterval = setInterval(() => {
    let i = Math.floor(Math.random() * landingBackgroundURLs.length);
    landingPage.style.backgroundImage = `url(${landingBackgroundURLs[i]})`;
  }, 10000);
};
randomBackgroundList.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("active")) {
    } else {
      randomBackgroundList.forEach((ele) => {
        ele.classList.remove("active");
      });
      e.classList.add("active");
      window.localStorage.setItem("randomBG", e.dataset.random);
    }
    if (e.dataset.random === "true") {
      clearInterval(bgInterval);
      randomBGImage();
    } else {
      clearInterval(bgInterval);
      landingPage.style.backgroundImage = `url("../data/images/01.jpg")`;
    }
  });
});
if (
  window.localStorage.getItem("randomBG") === null ||
  window.localStorage.getItem("randomBG") === "true"
) {
  window.localStorage.setItem("randomBG", "true");
  randomBGImage();
} else {
  clearInterval(bgInterval);
  landingPage.style.backgroundImage = `url("../data/images/01.jpg")`;
}
randomBackgroundList.forEach((e) => {
  if (e.dataset.random === window.localStorage.getItem("randomBG"))
    e.classList.add("active");
});

///////////////////////////////////////////////

// bullets options
let bulletsList = document.querySelectorAll("aside .bullets-setting ul li");
let bullets = document.getElementById("bullets");
bulletsList.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("active")) {
    } else {
      bulletsList.forEach((ele) => {
        ele.classList.remove("active");
      });
      e.classList.add("active");
      window.localStorage.setItem("bullets", e.dataset.bullets);
    }
    if (e.dataset.bullets === "true") {
      bullets.classList.add("active");
    } else {
      bullets.classList.remove("active");
    }
  });
});
if (
  window.localStorage.getItem("bullets") === null ||
  window.localStorage.getItem("bullets") === "true"
) {
  window.localStorage.setItem("bullets", "true");
  bullets.classList.add("active");
} else {
  bullets.classList.remove("active");
}
bulletsList.forEach((e) => {
  if (e.dataset.bullets === window.localStorage.getItem("bullets"))
    e.classList.add("active");
});

// reset options button
let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
  window.localStorage.clear();
});

// nav bar show and hide
let navShowBtn = document.getElementById("navShowBtn");
let navHideBtn = document.getElementById("navHideBtn");
let navBar = document.getElementsByTagName("nav")[0];
navShowBtn.addEventListener("click", (e) => {
  navBar.classList.toggle("active");
  e.stopPropagation();
});
navHideBtn.addEventListener("click", (e) => {
  navBar.classList.toggle("active");
  e.stopPropagation();
});
// document.addEventListener("click", (e) => {
//   if (e.target !== navBar && e.target !== navBar.children[1]) {
//     if (navBar.classList.contains("active")) {
//       navBar.classList.toggle("active");
//       console.log(e.target);
//     }
//   }
// });

// progress on skills
let skills = document.getElementById("skills");
let progressBar = document.querySelectorAll(
  ".skills .sec-body .box .progress span"
);
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= skills.offsetTop - 300) {
    progressBar.forEach((e) => {
      e.style.width = e.dataset.progress;
    });
  }
});

// open image pop-up created in html file
// let galleryImages = document.querySelectorAll(".gallery .sec-body img");
// let popUp = document.querySelector(".pop-up");
// let popUpCard = document.querySelector(".pop-up .image-card");
// let popUpImage = document.querySelector(".pop-up img");
// let popUpTitle = document.querySelector(".pop-up span");
// let closePopUp = document.querySelector(".pop-up .cancel");
// galleryImages.forEach((image) => {
//   image.addEventListener("click", (e) => {
//     // add image link
//     popUpImage.setAttribute("src", image.src);
//     popUpImage.setAttribute("alt", image.alt);
//     // add image title
//     popUpTitle.innerText = image.alt;
//     // show pop-up
//     popUp.classList.add("active");
//     e.stopPropagation();
//   });
// });
// closePopUp.addEventListener("click", (e) => {
//   popUp.classList.remove("active");
//   e.stopPropagation();
// });
// document.addEventListener("click", (e) => {
//   if (
//     e.target !== popUpCard &&
//     e.target !== popUpTitle &&
//     e.target !== popUpImage
//   ) {
//     if (popUp.classList.contains("active")) {
//       popUp.classList.remove("active");
//     }
//   }
// });

// create and open pop-up by only js
let galleryImages = document.querySelectorAll(".gallery .sec-body img");
galleryImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    // create pop-up div
    let popUp = document.createElement("div");
    popUp.classList.add("pop-up");
    // create pop-up overlay div
    let popUpOverlay = document.createElement("div");
    popUpOverlay.classList.add("overlay");
    // create pop-up image card
    let popUpCard = document.createElement("div");
    popUpCard.classList.add("image-card");
    // create cancel div
    let closePopUp = document.createElement("div");
    closePopUp.classList.add("cancel");
    closePopUp.innerHTML = `<i class="f-icon fa-solid fa-xmark"></i>`;
    // create the
    let popUpImage = document.createElement("img");
    popUpImage.src = e.target.src;
    if (
      e.target.alt !== undefined ||
      e.target.alt !== null ||
      e.target.alt !== ""
    ) {
      popUpImage.alt = e.target.alt;
    }
    // append elements to the pop-up card
    popUpCard.prepend(closePopUp);
    if (
      e.target.alt !== undefined ||
      e.target.alt !== null ||
      e.target.alt !== ""
    ) {
      let popUpTitle = document.querySelector("span");
      popUpTitle.classList.add("title");
      popUpTitle.innerText = e.target.alt;
      popUpCard.append(popUpTitle);
    }
    popUpCard.append(popUpImage);
    // append elements in pop-up
    popUp.append(popUpOverlay);
    popUp.append(popUpCard);
    // append pop-up in end of body
    body.append(popUp);
    // active pop-up
    popUp.classList.add("active");
    e.stopPropagation();
    closePopUp.addEventListener("click", () => {
      popUp.classList.remove("active");
      e.stopPropagation();
    });
    document.addEventListener("click", (e) => {
      if (popUpCard.children[1].classList.contains("title")) {
        if (
          e.target !== popUpCard &&
          e.target !== popUpCard.children[1] &&
          e.target !== popUpImage
        ) {
          if (popUp.classList.contains("active")) {
            popUp.classList.remove("active");
          }
        }
      } else {
        if (e.target !== popUpCard && e.target !== popUpImage) {
          if (popUp.classList.contains("active")) {
            popUp.classList.remove("active");
          }
        }
      }
    });
    // // add image link
    // popUpImage.setAttribute("src", image.src);
    // popUpImage.setAttribute("alt", image.alt);
    // // add image title
    // popUpTitle.innerText = image.alt;
    // // show pop-up
    // popUp.classList.add("active");
    // e.stopPropagation();
  });
});

// go up button
let goUpDiv = document.querySelector(".go-up");
let goUpBtn = document.querySelector(".go-up a");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 600) {
    goUpDiv.style.display = "block";
  } else {
    goUpDiv.style.display = "none";
  }
});
goUpBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
