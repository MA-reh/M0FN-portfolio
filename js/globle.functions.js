// Download CV Btn
function closeCvPopup() {
  popupCV.classList.remove("active");
}

function openCvPopup() {
  popupCV.classList.add("active");
}

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

// when Window open
function loadedWindow() {
  loadingPageEle.classList.add("hide");

  setTimeout((e) => {
    loadingPageEle.classList.add("d-none");
  }, 1000);
}

// Scroll User in To Page
function scrollUserInToPage() {
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

    sectionTitle.classList.remove("active");

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
}

// if user hover on any ancor in NavBar do function
function hoverOnLinkNavbar() {
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
}
function outHoverOnLinkNavbar() {
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
}
function clickOnLinkNavbar() {
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
}

// btn contact Us if user click btn his show Every Social Btns

function toggleSocialIcons() {
  if (plusIcon.classList.contains("show")) {
    plusIcon.classList.remove("show");
    for (let btn of allIconsSocial) {
      btn.classList.remove("active");
    }
    setTimeout((e) => {
      if (!(allIconsSocial[0].classList.contains("active"))) {
        arrowContactDraw.classList.remove("hide");
      }
    }, 5000);

    return;
  }
  plusIcon.classList.add("show");
  for (let btn of allIconsSocial) {
    btn.classList.add("active");
    arrowContactDraw.classList.add("hide");
  }
}

// change color icon SnapShat

function toggleColorIconSnapShat(color) {
  iconSnapchat.firstElementChild.firstElementChild.setAttribute("fill", color);
}
