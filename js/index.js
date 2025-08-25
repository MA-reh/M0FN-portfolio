let buttonsNav = document.querySelectorAll(".nav-ancor"),
  dropMenuPortfolio = buttonsNav[5].nextElementSibling,
  sectionContact = document.querySelector("#Contact"),
  plusIcon = sectionContact.querySelector(".item .socials-buttons"),
  BoxIconsSocials = plusIcon.nextElementSibling,
  allIconsSocial = BoxIconsSocials.querySelectorAll("span.social-bg"),
  buttonTop = document.querySelector(".button-up a"),
  buttonTestDistance = document.querySelector("#test");

window.addEventListener("scroll", (e) => {
  setInterval(
    document.querySelector("html").scrollTop >= 250
      ? buttonTop.classList.add("active")
      : buttonTop.classList.remove("active"),
    1
  );

  setInterval((e) => {
    let arrTitles = document.querySelectorAll(".title h2");
    if (document.querySelector("html").scrollTop >= 780) {
      arrTitles[0].classList.add("active");
    } else {
      arrTitles[0].classList.remove("active");
    }

    if (document.querySelector("html").scrollTop >= 1865) {
      arrTitles[1].classList.add("active");
    } else {
      arrTitles[1].classList.remove("active");
    }

    if (document.querySelector("html").scrollTop >= 2600) {
      arrTitles[2].classList.add("active");
    } else {
      arrTitles[2].classList.remove("active");
    }

    if (document.querySelector("html").scrollTop >= 3350) {
      arrTitles[3].classList.add("active");
    } else {
      arrTitles[3].classList.remove("active");
    }

    if (document.querySelector("html").scrollTop >= 4520) {
      arrTitles[4].classList.add("active");
    } else {
      arrTitles[4].classList.remove("active");
    }

    if (document.querySelector("html").scrollTop >= 5690) {
      arrTitles[5].classList.add("active");
    } else {
      arrTitles[5].classList.remove("active");
    }
  }, 2500);
});

for (let btn of buttonsNav) {
  btn.addEventListener("mouseenter", () => {
    btn.querySelector("span").classList.add("active");
  });

  btn.addEventListener("mouseleave", () => {
    btn.querySelector("span").classList.remove("active");
  });
}

function navBtnPortfolioHover() {
  buttonsNav[5].querySelector("span").classList.add("active");
  dropMenuPortfolio.classList.add("show");
}

function navBtnPortfolioLeave() {
  buttonsNav[5].querySelector("span").classList.remove("active");
  dropMenuPortfolio.classList.remove("show");
}

function activeContact() {}

buttonsNav[5].addEventListener("mouseenter", navBtnPortfolioHover);
buttonsNav[5].addEventListener("mouseleave", navBtnPortfolioLeave);

dropMenuPortfolio.addEventListener("mouseenter", navBtnPortfolioHover);
dropMenuPortfolio.addEventListener("mouseleave", navBtnPortfolioLeave);

//
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
