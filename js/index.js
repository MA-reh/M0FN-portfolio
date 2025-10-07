let buttonsNav = document.querySelectorAll(".nav-ancor"),
  dropMenuPortfolio = buttonsNav[5].nextElementSibling,
  sectionContact = document.querySelector("#Contact"),
  plusIcon = sectionContact.querySelector(".item .socials-buttons"),
  BoxIconsSocials = plusIcon.nextElementSibling,
  allIconsSocial = BoxIconsSocials.querySelectorAll("span.social-bg"),
  buttonTop = document.querySelector(".button-up a"),
  allSectionsInPage = document.querySelectorAll(".click-key"),
  heightOfNavBar = document.querySelector("nav").clientHeight,
  dropMenuLinks = dropMenuPortfolio.querySelectorAll("li"),
  allTitles = document.querySelectorAll(".title .image h2"),
  loadingPageEle = document.querySelector("#loadingPage"),
  allBtnServices = document.querySelectorAll(".btn-service"),
  allElementCanHoverIt = document.querySelectorAll(".hoverItem");

for (let navBtn of buttonsNav) {
  navBtn.addEventListener("click", function (e) {
    e.preventDefault();

    navBtn.parentElement.parentElement.parentElement.classList.remove("show");

    let currentNavBtn = document.querySelector(
      "nav .navbar-collapse .nav-ancor.active"
    ),
      idOfCurrentSection = navBtn.getAttribute("href"),
      currentSection = document.querySelector(`${idOfCurrentSection}`),
      currentSectionTop = currentSection.offsetTop - heightOfNavBar + 5;

    // Move page to Start Section
    setTimeout(() => {
      window.scrollTo({
        top: currentSectionTop,
        left: 0,
      });
    }, 100);

    currentNavBtn.classList.remove("active");
    navBtn.classList.add("active");
  });
}

// NavBar Links
for (let dropLink of dropMenuLinks) {
  dropLink.addEventListener("mouseenter", hoverOnLinkNavbar);

  dropLink.parentElement.addEventListener("mouseleave", outHoverOnLinkNavbar);

  dropLink.addEventListener("click", (e) => {
    e.preventDefault();

    clickOnLinkNavbar(dropLink);
  });
}

// if user hover on element has class hoverItem fire function
for (let hoverEle of allElementCanHoverIt) {
  hoverEle.addEventListener("mouseenter", function (e) {
    MouseBall.classList.add("active")
  });

  hoverEle.addEventListener("mouseleave", function (e) {
    MouseBall.classList.remove("active")
  });
}

document.addEventListener("mousemove", function (e) {
  ballMove(e.clientX, e.clientY)
});

document.addEventListener("touchmove", function (e) {
  e.preventDefault();
  ballMove(e.touches[0].clientX, e.touches[0].clientY);
});

// when Window open
window.addEventListener("DOMContentLoaded", loadedWindow);

// stop any action on popup box
popupCV.firstElementChild.addEventListener("click", (e) => {
  e.stopPropagation();
});

// open popup btn1
CVBtn1.addEventListener("click", (e) => {
  e.preventDefault();

  popupCV.classList.add("active");
});

// open popup btn2
CVBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  popupCV.classList.add("active");
});

// when user scroll in WebSite
window.addEventListener("scroll", scrollUserInToPage);

buttonsNav[5].addEventListener("mouseenter", navBtnPortfolioHover);
buttonsNav[5].addEventListener("mouseleave", navBtnPortfolioLeave);

dropMenuPortfolio.addEventListener("mouseenter", navBtnPortfolioHover);
dropMenuPortfolio.addEventListener("mouseleave", navBtnPortfolioLeave);

//btn contact Us if user click btn his show Every Social Btns
plusIcon.addEventListener("click", toggleSocialIcons);

iconSnapchat.addEventListener("mouseenter", () => {
  toggleColorIconSnapShat("#FFFC00");
});

iconSnapchat.addEventListener("mouseleave", () => {
  toggleColorIconSnapShat("#bff747");
});
