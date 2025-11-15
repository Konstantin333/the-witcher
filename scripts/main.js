const menuTablet = document.querySelector(".menuTablet");
const menuMobile = document.querySelector(".menuMobile");
const nav = document.querySelector("nav");
const navMobile = document.querySelector(".navMobile");
const section = document.querySelector("section");
const allDetails = document.querySelectorAll("details");
const allCharacters = document.querySelectorAll(".bestiaryСharacters");

const menuStates = {
  tabletOn: "./images/nav/menu-tablet-on.png",
  tabletOff: "./images/nav/menu-tablet-off.png",
  mobileOn: "./images/nav/menu-mobile-on.png",
  mobileOff: "./images/nav/menu-mobile-off.png",
};

function showCharacters() {
  for (let i = 0; i < allCharacters.length; i++) {
    allCharacters[i].style.display = "none";
  }

  switch ("flex") {
    case section.childNodes[1].style.display:
      for (let j = 0; j < 4; j++) {
        allCharacters[j].style.display = "flex";
      }
      break;
    case section.childNodes[3].style.display:
      for (let j = 4; j < 9; j++) {
        allCharacters[j].style.display = "flex";
      }
      break;
    case section.childNodes[5].style.display:
      for (let j = 9; j < 15; j++) {
        allCharacters[j].style.display = "flex";
      }
      break;
    case section.childNodes[7].style.display:
      for (let j = 15; j < 23; j++) {
        allCharacters[j].style.display = "flex";
      }
      break;
    case section.childNodes[9].style.display:
      for (let j = 23; j < 28; j++) {
        allCharacters[j].style.display = "flex";
      }
      break;
  }
}

function changeSection(navigation) {
  for (let i = 0; i < navigation.childNodes.length; i++) {
    if (i % 2 != 0) {
      navigation.childNodes[i].addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });

        for (let j = 0; j < navigation.childNodes.length; j++) {
          if (j % 2 != 0) {
            nav.childNodes[j].classList.remove("active");
            navMobile.childNodes[j].classList.remove("active");
            section.childNodes[j].style.display = "none";
          }
        }
        nav.childNodes[i].classList.add("active");
        navMobile.childNodes[i].classList.add("active");
        section.childNodes[i].style.display = "flex";

        if (window.screen.width <= 768) {
          menuTablet.setAttribute("src", menuStates.tabletOn);
          navigation.style.display = "none";
        }
        if (window.screen.width <= 425) {
          menuMobile.setAttribute("src", menuStates.mobileOn);
          navigation.style.display = "none";
        }

        showCharacters();
      });
    }
  }
}

function showNavigation(device) {
  device.addEventListener("click", () => {
    if (device.getAttribute("src") == menuStates.tabletOn) {
      device.setAttribute("src", menuStates.tabletOff);
      navMobile.style.display = "block";
    } else if (device.getAttribute("src") == menuStates.tabletOff) {
      device.setAttribute("src", menuStates.tabletOn);
      navMobile.style.display = "none";
    } else if (device.getAttribute("src") == menuStates.mobileOn) {
      device.setAttribute("src", menuStates.mobileOff);
      navMobile.style.display = "block";
    } else {
      device.setAttribute("src", menuStates.mobileOn);
      navMobile.style.display = "none";
    }
  });
}

function hideDetails() {
  [...allDetails].forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      allDetails.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
          detail.childNodes[1].style.border = "1px solid #000";
          detail.childNodes[1].style.color = "#000";
          detail.childNodes[1].style.background = "#d1cbb6";
          detail.childNodes[1].style.textShadow =
            "1px 1px 1px #d1cbb6, 1px 1px 3px #d1cbb6, 2px 2px 4px #000";

          // временный способ «останавливать» Youtube-видео при переключении на другое:
          let saveChild = detail.childNodes[3];
          detail.childNodes[3].remove();
          detail.appendChild(saveChild);
        } else {
          detail.childNodes[1].style.border = "1px solid #d1cbb6";
          detail.childNodes[1].style.color = "#d1cbb6";
          detail.childNodes[1].style.background = "#000";
          detail.childNodes[1].style.textShadow = "none";
        }
      });
    });
  });
}

function init() {
  changeSection(nav);
  changeSection(navMobile);
  showNavigation(menuTablet);
  showNavigation(menuMobile);
  hideDetails();
}

init();
