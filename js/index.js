let buttonsNav = document.querySelectorAll(".nav-ancor"),
  dropMenuPortfolio = buttonsNav[5].nextElementSibling,
  sectionContact = document.querySelector("#Contact"),
  plusIcon = sectionContact.querySelector(".item .socials-buttons"),
  BoxIconsSocials = plusIcon.nextElementSibling,
  allIconsSocial = BoxIconsSocials.querySelectorAll("span.social-bg"),
  buttonTop = document.querySelector(".button-up a"),
  buttonTestDistance = document.querySelector("#test"),
  allSectionsInPage = document.querySelectorAll(".click-key"),
  heightOfNavBar = document.querySelector("nav").clientHeight,
  dropMenuLinks = dropMenuPortfolio.querySelectorAll("ul li"),
  loadingPageEle = document.querySelector("#loadingPage");

  window.addEventListener("DOMContentLoaded" , (e) => {
    
    loadingPageEle.classList.add("hide")
    
    setTimeout((e) => {
      loadingPageEle.classList.add("d-none")
      
    },1000)
  })
  
  

for (let navBtn of buttonsNav) {
  navBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let currentNavBtn = document.querySelector(
        "nav .navbar-collapse .nav-ancor.active"
      ),
      idOfCurrentSection = navBtn.getAttribute("href"),
      currentSection = document.querySelector(`${idOfCurrentSection}`),
      currentSectionTop = currentSection.offsetTop - heightOfNavBar;

    // Move page to Start Section
    window.scrollTo({
      top: currentSectionTop,
      left: 0,
    });

    currentNavBtn.classList.remove("active");
    navBtn.classList.add("active");
  });
}

// when user scroll in WebSite
window.addEventListener("scroll", function () {
  let topOfWindow = window.scrollY;

  let sectionNames = [
    "Home",
    "About",
    "Experience",
    "Awards",
    "Service",
    "Portfolio",
    "Contact",
  ];

  for (let sectionName of sectionNames) {
    let section = document.querySelector(`#${sectionName}`),
      sectionTitle = section.querySelector("h2"),
      sectionId = section.id,
      topOfSection = section.offsetTop - heightOfNavBar,
      bottomOfSection = section.offsetTop + section.clientHeight;

    if (topOfWindow >= topOfSection && topOfWindow <= bottomOfSection) {
      let newSection = document.querySelector(
          `nav .nav-ancor[href="#${sectionId}"]`
        ),
        oldSection = document.querySelector(`nav .nav-ancor.active`);

      sectionTitle.classList.add("active");

      oldSection.classList.remove("active");
      newSection.classList.add("active");
    }
  }

  // check if user scroll at 250 or up show btn travel up
  setInterval(
    document.querySelector("html").scrollTop >= 250
      ? buttonTop.classList.add("active")
      : buttonTop.classList.remove("active"),
    1
  );
});

// if hover on PortfolioBtn show drop menu
function navBtnPortfolioHover() {
  buttonsNav[5].querySelector("span").classList.add("active");
  dropMenuPortfolio.classList.add("show");
}

// if hover on PortfolioBtn hidden drop menu
function navBtnPortfolioLeave() {
  buttonsNav[5].querySelector("span").classList.remove("active");
  dropMenuPortfolio.classList.remove("show");
}

for (let dropLink of dropMenuLinks) {
  dropLink.addEventListener("mouseenter", (e) => {
    for (let btnNav of buttonsNav) {
      btnNav.classList.remove("active");
    }

    let topOfWindow = window.scrollY;

    let sectionNames = [
      "Home",
      "About",
      "Experience",
      "Awards",
      "Service",
      "Portfolio",
      "Contact",
    ];

    for (let sectionName of sectionNames) {
      let section = document.querySelector(`#${sectionName}`),
        sectionId = section.id,
        topOfSection = section.offsetTop - heightOfNavBar,
        bottomOfSection = section.offsetTop + section.clientHeight;

      if (topOfWindow >= topOfSection && topOfWindow <= bottomOfSection) {
        let newSection = document.querySelector(
          `nav .nav-ancor[href="#${sectionId}"]`
        );

        newSection.classList.add("active");
      }
    }

    buttonsNav[5].classList.add("active");
  });
  dropLink.parentElement.addEventListener("mouseleave", (e) => {
    for (let btnNav of buttonsNav) {
      btnNav.classList.remove("active");
    }

    let topOfWindow = window.scrollY;

    let sectionNames = [
      "Home",
      "About",
      "Experience",
      "Awards",
      "Service",
      "Portfolio",
      "Contact",
    ];

    for (let sectionName of sectionNames) {
      let section = document.querySelector(`#${sectionName}`),
        sectionId = section.id,
        topOfSection = section.offsetTop - heightOfNavBar,
        bottomOfSection = section.offsetTop + section.clientHeight;

      if (topOfWindow >= topOfSection && topOfWindow <= bottomOfSection) {
        let newSection = document.querySelector(
          `nav .nav-ancor[href="#${sectionId}"]`
        );

        newSection.classList.add("active");
      }
    }
  });

  dropLink.addEventListener("click", function (e) {
    e.preventDefault();

    let currentNavBtn = document.querySelector(
        "nav .navbar-collapse .nav-ancor.active"
      ),
      idOfCurrentSection = buttonsNav[5].getAttribute("href"),
      currentSection = document.querySelector(`${idOfCurrentSection}`),
      currentSectionTop = currentSection.offsetTop - heightOfNavBar - 80;

    let idOfCurrentProject = dropLink.firstElementChild.getAttribute("href"),
      currentProject = document.querySelector(` ${idOfCurrentProject}`),
      currentProjectTop = currentProject.offsetTop + currentSectionTop;

    window.scrollTo({
      top: currentProjectTop,
      left: 0,
    });
  });
}

buttonsNav[5].addEventListener("mouseenter", navBtnPortfolioHover);
buttonsNav[5].addEventListener("mouseleave", navBtnPortfolioLeave);

dropMenuPortfolio.addEventListener("mouseenter", navBtnPortfolioHover);
dropMenuPortfolio.addEventListener("mouseleave", navBtnPortfolioLeave);

//btn contact Us if user click btn his show Every Social Btns
plusIcon.addEventListener("click", () => {
  if (plusIcon.classList.contains("show")) {
    plusIcon.classList.remove("show");
    for (let btn of allIconsSocial) {
      btn.classList.remove("active");
    }
    return;
  }
  plusIcon.classList.add("show");
  for (let btn of allIconsSocial) {
    btn.classList.add("active");
  }
});
