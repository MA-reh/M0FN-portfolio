let buttonsNav = document.querySelectorAll(".nav-ancor"),
  dropMenuPortfolio = buttonsNav[5].nextElementSibling,
  sectionContact = document.querySelector("#Contact"),
  plusIcon = sectionContact.querySelector(".item .socials-buttons"),
  BoxIconsSocials = plusIcon.nextElementSibling,
  allIconsSocial = BoxIconsSocials.querySelectorAll("span.social-bg"),
  buttonTop = document.querySelector(".button-up a"),
  buttonTestDistance = document.querySelector("#test"),
  allSectionsInPage = document.querySelectorAll(".click-key");

// when user scroll in WebSite
window.addEventListener("scroll", (e) => {
  // check if user scroll at 250 or up show btn travel up
  setInterval(
    document.querySelector("html").scrollTop >= 250
      ? buttonTop.classList.add("active")
      : buttonTop.classList.remove("active"),
    1
  );

  // if user scroll at (number in if condition) start animation
  setInterval((e) => {
    let arrTitles = document.querySelectorAll(".title h2");
    if (document.querySelector("html").scrollTop >= 810) {
      arrTitles[0].classList.add("active");
    } else {
      arrTitles[0].classList.remove("active");
    }

    if (document.querySelector("html").scrollTop >= 1900) {
      arrTitles[1].classList.add("active");
    } else {
      arrTitles[1].classList.remove("active");
    }

    if (document.querySelector("html").scrollTop >= 2650) {
      arrTitles[2].classList.add("active");
    } else {
      arrTitles[2].classList.remove("active");
    }

    if (document.querySelector("html").scrollTop >= 3400) {
      arrTitles[3].classList.add("active");
    } else {
      arrTitles[3].classList.remove("active");
    }

    if (document.querySelector("html").scrollTop >= 4580) {
      arrTitles[4].classList.add("active");
    } else {
      arrTitles[4].classList.remove("active");
    }

    if (document.querySelector("html").scrollTop >= 5730) {
      arrTitles[5].classList.add("active");
    } else {
      arrTitles[5].classList.remove("active");
    }
  }, 1000);
});

// btn nav bar if user hover add class active if user leave hover remove class
for (let btn of buttonsNav) {
  btn.addEventListener("mouseenter", () => {
    btn.querySelector("span").classList.add("active");
  });

  btn.addEventListener("mouseleave", () => {
    btn.querySelector("span").classList.remove("active");
  });
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
